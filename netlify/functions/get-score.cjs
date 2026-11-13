const https = require("https");

// Safe HTTPS request function (taaki fetch failed error kabhi na aaye)
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error("Invalid JSON from Meta: " + data.substring(0, 100)));
        }
      });
    }).on("error", (err) => reject(err));
  });
}

exports.handler = async function (event, context) {
  const token = (process.env.IG_ACCESS_TOKEN || "").trim();
  const userId = (process.env.IG_USER_ID || "").trim();

  if (!token || !userId) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Netlify mein IG_ACCESS_TOKEN ya IG_USER_ID missing hai" })
    };
  }

  const targetUsername = event.queryStringParameters?.username;

  try {
    // Unified Login Token hamesha ://facebook.com par kaam karta hai
    const baseUrl = "https://://facebook.com/v21.0";
    let fields = "";

    if (targetUsername) {
      fields = `business_discovery.username(${targetUsername}){username,name,followers_count,media_count,media.limit(10){like_count,comments_count,media_type}}`;
    } else {
      fields = `username,name,followers_count,media_count,media.limit(10){like_count,comments_count,media_type}`;
    }

    const url = `${baseUrl}/${userId}?fields=${encodeURIComponent(fields)}&access_token=${encodeURIComponent(token)}`;
    const rawData = await makeRequest(url);

    // Agar Meta API koi error bhejta hai toh exact reason dikhana
    if (rawData.error) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          metaError: rawData.error.message, 
          type: rawData.error.type,
          code: rawData.error.code 
        })
      };
    }

    const profile = targetUsername ? rawData.business_discovery : rawData;
    const followers = profile.followers_count || 0;
    const posts = profile.media?.data || [];

    let totalLikes = 0;
    let totalComments = 0;
    posts.forEach((post) => {
      totalLikes += post.like_count || 0;
      totalComments += post.comments_count || 0;
    });

    const avgLikes = posts.length ? totalLikes / posts.length : 0;
    const avgComments = posts.length ? totalComments / posts.length : 0;
    const engagementRate = followers > 0 ? (((avgLikes + avgComments) / followers) * 100).toFixed(2) : 0;

    // Fake vs Real scoring logic (100 mein se)
    let score = 50;
    if (engagementRate >= 3) score += 30;
    else if (engagementRate >= 1) score += 15;
    else score -= 20;

    const commentRatio = avgLikes > 0 ? (avgComments / avgLikes) * 100 : 0;
    if (commentRatio >= 1) score += 20;
    else if (commentRatio < 0.3) score -= 15;

    score = Math.max(0, Math.min(100, score));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: profile.username,
        followers: followers,
        engagementRate: `${engagementRate}%`,
        creatorScore: score,
        status: score >= 70 ? "Real & Healthy Audience" : score >= 45 ? "Average / Mixed" : "High Bot / Fake Risk"
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server Error", details: err.message })
    };
  }
};
