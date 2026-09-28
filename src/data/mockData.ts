import { Campaign, FaqItem, BlogPost } from '../types';
import theOldDelhiImg from '../assets/images/regenerated_image_1790277602650.png';
import dilliDarbarFoodImg from '../assets/images/regenerated_image_1790277606627.png';
import mezzeSocialImg from '../assets/images/regenerated_image_1790277598384.png';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'daryaganj-restaurant',
    name: 'Weekend Food Creator Campaign',
    restaurantName: 'Daryaganj Restaurant',
    location: 'Delhi',
    cuisine: 'Artisanal Coffee & Continental',
    image: '/daryaganj.jpg',
    cashbackMax: 90,
    cashbackMin: 30,
    deliverables: ['1 Reel'],
    requirements: [
      'Public Instagram profile',
      'Relevant food/lifestyle audience',
      'Original high-res footage',
      'Tag restaurant (@daryaganjrestaurant)',
      'Tag Creatzaar (@creatzaar)'
    ],
    slotsTotal: 20,
    slotsRemaining: 7,
    creatorFollowerMin: '1,000+ Followers',
    category: 'Food / Lifestyle',
    expiryDays: 14,
    featured: true
  },
  {
    id: 'zaika-e-dilli',
    name: 'Gourmet North Indian Tasting',
    restaurantName: 'Zaika E Dilli - Best Veg Restaurant',
    location: 'Delhi',
    cuisine: 'Contemporary Indian',
    image: '/zaika-e-dilli.jpg',
    cashbackMax: 90,
    cashbackMin: 40,
    deliverables: ['1 Reel'],
    requirements: [
      'Public Instagram profile',
      'Engagement rate > 3.5%',
      'Original dining review',
      'Tag @zaikaedilli & @creatzaar'
    ],
    slotsTotal: 15,
    slotsRemaining: 4,
    creatorFollowerMin: '1,000+ Followers',
    category: 'Food / Fine Dining',
    expiryDays: 9,
    featured: true
  },
  {
    id: 'the-old-delhi',
    name: 'Ramen & Bao Experience',
    restaurantName: 'The Old Delhi',
    location: 'Delhi',
    cuisine: '',
    image: theOldDelhiImg,
    cashbackMax: 90,
    cashbackMin: 30,
    cashbackBadge: '30% to 90% Cashback',
    deliverables: ['1 Reel'],
    requirements: [
      'Public creator profile',
      'Reel posted within 72 hrs of visit',
      'Clear lighting and audio',
      'Tag @theolddelhi & @creatzaar'
    ],
    slotsTotal: 25,
    slotsRemaining: 11,
    creatorFollowerMin: '1,000+ Followers',
    category: '',
    expiryDays: 21,
    featured: true
  },
  {
    id: 'dilli-darbar-food',
    name: 'Sourdough & Specialty Matcha Fest',
    restaurantName: 'Dilli Darbar Food Pvt Ltd - Best Veg Restaurant',
    location: 'Delhi',
    cuisine: '',
    image: dilliDarbarFoodImg,
    cashbackMax: 90,
    cashbackMin: 30,
    cashbackBadge: '30% to 90% Cashback',
    deliverables: ['1 Reel'],
    requirements: [
      'Public creator handle',
      'Lifestyle or food aesthetic',
      'Highlight brunch items',
      'Tag @dillidarbarfood'
    ],
    slotsTotal: 18,
    slotsRemaining: 8,
    creatorFollowerMin: '1,000+ Followers',
    category: '',
    expiryDays: 16
  },
  {
    id: 'mezze-social',
    name: 'Mediterranean Sunset Sunset Platters',
    restaurantName: 'Zaika E Dilli - Best Veg Restaurant',
    location: 'Delhi',
    cuisine: '',
    image: mezzeSocialImg,
    cashbackMax: 90,
    cashbackMin: 30,
    cashbackBadge: '30% to 90% Cashback',
    deliverables: ['1 Reel'],
    requirements: [
      'Public account',
      'Captures ambiance + signature dips',
      'Post tagged with location',
      'Tag @zaikaedilli & @creatzaar'
    ],
    slotsTotal: 12,
    slotsRemaining: 3,
    creatorFollowerMin: '1,000+ Followers',
    category: '',
    expiryDays: 6
  }
];

export const CASHBACK_TIERS = [
  {
    percentage: 30,
    tier: 'Basic Tier',
    requirement: 'Basic content requirement',
    description: 'Perfect for starters & nano creators. Simple high-quality Instagram Story with geotag and restaurant mention.',
    badgeColor: 'from-[#a3e635]/10 to-[#10b981]/10 text-[#bef264] border-[#a3e635]/30',
    deliverables: '1 Instagram Story + Location tag'
  },
  {
    percentage: 50,
    tier: 'Growth Tier',
    requirement: 'Higher content requirement',
    description: '1 short-form Reel or 2 engaging Stories highlighting food presentation and ambiance with honest feedback.',
    badgeColor: 'from-[#a3e635]/20 to-[#10b981]/20 text-[#bef264] border-[#a3e635]/40',
    deliverables: '1 Short Reel or 2 Curated Stories'
  },
  {
    percentage: 70,
    tier: 'Pro Tier',
    requirement: 'Higher campaign requirements',
    description: 'Full food experience Reel (30s+) showcasing dishes, ambiance, and authentic taste reaction + 1 Story.',
    badgeColor: 'from-[#a3e635]/25 to-[#10b981]/30 text-[#bef264] border-[#a3e635]/50',
    deliverables: '1 Quality 30s+ Reel + 1 Story'
  },
  {
    percentage: 90,
    tier: 'Premium Tier',
    requirement: 'Premium campaign requirement',
    description: 'High-production Reel with voiceover/ASMR or creative edit, storytelling, carousel support, and maximum reach.',
    badgeColor: 'from-[#a3e635] to-[#84cc16] text-[#080d1a] font-bold shadow-lg shadow-[#a3e635]/25 border-[#a3e635]',
    deliverables: '1 Cinematic Reel + Audio/VO + 2 Stories',
    isHero: true
  }
];

export const RESTAURANT_BENEFITS = [
  {
    id: 'more-content',
    title: 'More Content',
    desc: 'Get authentic Reels and Stories featuring your food, drinks, and ambiance consistently every week.',
    iconName: 'Video'
  },
  {
    id: 'local-reach',
    title: 'Local Reach',
    desc: 'Reach creators and active foodie audiences in your exact city, neighborhood, and delivery radius.',
    iconName: 'MapPin'
  },
  {
    id: 'authentic-promotion',
    title: 'Authentic Promotion',
    desc: 'Creators order and experience your food themselves, creating authentic content instead of scripted advertisements.',
    iconName: 'Sparkles'
  },
  {
    id: 'performance-based',
    title: 'Performance-Based Marketing',
    desc: 'Campaigns are tied directly to specific creator visits, deliverables, and verifiable content output.',
    iconName: 'TrendingUp'
  },
  {
    id: 'creator-discovery',
    title: 'Creator Discovery',
    desc: 'Discover vetted nano, micro, and food creators that align with your restaurant brand and audience.',
    iconName: 'Users'
  },
  {
    id: 'campaign-tracking',
    title: 'Campaign Tracking',
    desc: 'Track creators, submitted content, table visits, total reach, and ROI directly in a live dashboard.',
    iconName: 'BarChart3'
  }
];

export const CREATOR_BENEFITS = [
  {
    id: 'up-to-90-cashback',
    title: '30% to 90% Cashback',
    desc: 'Create qualifying content and receive generous cashback directly to your account according to campaign terms.',
    iconName: 'Percent'
  },
  {
    id: 'discover-restaurants',
    title: 'Discover New Restaurants',
    desc: 'Find trendsetting cafés, rooftop bistros, and iconic restaurants actively looking to collaborate with creators.',
    iconName: 'Compass'
  },
  {
    id: 'create-your-own',
    title: 'Create Your Own Content',
    desc: 'No robotic scripts or forced ads. Film your genuine experience, your authentic taste, and your unique style.',
    iconName: 'Film'
  },
  {
    id: 'grow-portfolio',
    title: 'Grow Your Portfolio',
    desc: 'Build a reputable portfolio of high-grade culinary, lifestyle, and hospitality content to attract bigger sponsors.',
    iconName: 'FolderPlus'
  },
  {
    id: 'more-opportunities',
    title: 'More Creator Opportunities',
    desc: 'Access a continuous stream of campaigns without pitching cold emails or waiting weeks for brand managers.',
    iconName: 'Zap'
  },
  {
    id: 'simple-process',
    title: 'Simple Process',
    desc: 'Discover → Order → Create → Post → Cashback. Straightforward, transparent, and seamless from visit to payout.',
    iconName: 'CheckCircle2'
  }
];

export const CREATOR_ELIGIBILITY = [
  'Instagram creators with an active, public account',
  'Food, lifestyle, travel, fashion, and local neighborhood creators',
  'Nano creators (1k - 10k followers) and Micro creators (10k - 50k+ followers)',
  'Consistent recent posting history (at least 3-5 posts/reels per month)',
  'Authentic engagement and passion for great food & photography'
];

export const COMPARISON_DATA = [
  {
    aspect: 'Finding creators',
    traditional: 'Find influencers manually via DMs & emails',
    creatzaar: 'Discover curated creators instantly through platform'
  },
  {
    aspect: 'Pricing & Negotiation',
    traditional: 'Negotiate individually with uncertain rates',
    creatzaar: 'Structured, transparent campaign-based cashback system'
  },
  {
    aspect: 'Compensation model',
    traditional: 'Pay upfront for unverified promotion',
    creatzaar: 'Reward creators when verifiable content goes live'
  },
  {
    aspect: 'Tracking & Analytics',
    traditional: 'Difficult tracking, chasing screenshots',
    creatzaar: 'Automated content submission & campaign dashboard'
  },
  {
    aspect: 'Relationship length',
    traditional: 'One-off isolated collaboration',
    creatzaar: 'Repeat creator campaigns & community loyalty'
  },
  {
    aspect: 'Core business impact',
    traditional: 'Content focused only, questionable local footfall',
    creatzaar: 'UGC Content + authentic customer discovery & footfall'
  }
];

export const DEMO_DASHBOARD_DATA = {
  campaignName: 'Weekend Food Campaign',
  restaurant: 'Caffio Café, Saket',
  status: 'Active',
  daysRunning: 18,
  metrics: [
    { label: 'Creators', value: 25, change: '+6 this week' },
    { label: 'Orders', value: 42, change: '+14 this week' },
    { label: 'Reels', value: 31, change: '100% on schedule' },
    { label: 'Stories', value: 47, change: 'High visibility' },
    { label: 'Reach', value: '125K', change: '+28% vs baseline' },
    { label: 'Engagement', value: '8.4K', change: '6.7% avg engagement' }
  ],
  recentSubmissions: [
    { creator: '@rohit_eats', followers: '8.4K', type: 'Reel (45s)', views: '14.2K', cashback: '90%', status: 'Approved' },
    { creator: '@delhicafeguide', followers: '19.2K', type: 'Reel + Story', views: '28.1K', cashback: '90%', status: 'Approved' },
    { creator: '@shreya_lifestyle', followers: '4.8K', type: 'Reel (30s)', views: '9.6K', cashback: '70%', status: 'Approved' },
    { creator: '@theurbanfoodie', followers: '12.1K', type: 'Reel + 2 Stories', views: '18.4K', cashback: '90%', status: 'Under Review' }
  ]
};

export const FAQS: FaqItem[] = [
  // Creator FAQs
  {
    id: 'c1',
    audience: 'creator',
    question: 'What is Creatzaar?',
    answer: 'Creatzaar is a growth and marketing platform that connects Instagram creators with top restaurants and cafés. Creators discover restaurants and cafes, order food online, create engaging Reels or Stories, and receive 30% to 90% cashback on eligible orders. No physical visit is required.'
  },
  {
    id: 'c2',
    audience: 'creator',
    question: 'How does cashback work?',
    answer: 'When you apply and get accepted for a campaign, you visit or order from the restaurant. After dining, you create and post your Instagram Reel or Story following the campaign deliverables, tag the restaurant and Creatzaar, and submit your post link. Once verified, your cashback is credited directly to your bank account or UPI.'
  },
  {
    id: 'c3',
    audience: 'creator',
    question: 'How much cashback can I earn?',
    answer: 'Cashback ranges from 30% to 90% and is calculated based on your creator score. The score is based on five factors: Follower Count (20%), Engagement Rate (30%), Content Quality (20%), Follower Authenticity (20%), and Posting Frequency (10%). Your final score determines the cashback level you are eligible for.'
  },
  {
    id: 'c4',
    audience: 'creator',
    question: 'Do I need a minimum number of followers?',
    answer: "Follower count isn't everything. We care deeply about content quality, audience relevance, visual aesthetic, and engagement. Many campaigns welcome nano creators with as few as 1,000 active followers who take authentic, beautiful food photos and videos."
  },
  {
    id: 'c5',
    audience: 'creator',
    question: 'Can I choose the restaurant?',
    answer: 'Yes! You have full freedom to browse available campaigns, filter by city, neighborhood, and cuisine, and apply only to restaurants whose menu and vibe you genuinely love.'
  },
  {
    id: 'c6',
    audience: 'creator',
    question: 'When will I receive cashback?',
    answer: 'Once your content is posted and verified by the Creatzaar team (usually within 24 to 48 hours), your cashback is processed immediately to your linked payment method.'
  },
  {
    id: 'c7',
    audience: 'creator',
    question: "What happens if my content doesn't meet the campaign requirements?",
    answer: "Our team will provide constructive feedback and give you an opportunity to adjust tags, re-share, or add the missing deliverables (such as missing a required tag or geotag). As long as you follow the clear guidelines provided beforehand, approvals are straightforward."
  },
  {
    id: 'c8',
    audience: 'creator',
    question: 'Can I participate in multiple campaigns?',
    answer: 'Absolutely! Active and reliable creators who consistently deliver engaging content can apply for and participate in multiple restaurant campaigns every month.'
  },
  {
    id: 'c9',
    audience: 'creator',
    question: 'What type of Instagram account do I need?',
    answer: 'You need a public Instagram account (Creator or Business profile recommended) with consistent posting activity in food, lifestyle, travel, fashion, or local experiences.'
  },

  // Restaurant FAQs
  {
    id: 'r1',
    audience: 'restaurant',
    question: 'How does Creatzaar work for restaurants?',
    answer: 'Instead of dealing with endless back-and-forth influencer DMs or paying hefty agency retainers, you launch a structured campaign with defined deliverables (e.g. 1 Reel + 1 Story) and cashback rewards. Curated local creators discover your campaign, visit your venue, pay for their food, and earn cashback only after publishing verified, high-quality content.'
  },
  {
    id: 'r2',
    audience: 'restaurant',
    question: 'How much does Creatzaar charge?',
    answer: 'Creatzaar operates on transparent, performance-based pricing. You only commit the agreed cashback/rewards for completed creator deliverables plus a minimal platform service fee. There are no expensive multi-month lock-in contracts.'
  },
  {
    id: 'r3',
    audience: 'restaurant',
    question: 'How do I create a campaign?',
    answer: 'Setting up takes under 5 minutes: specify your restaurant name, location, deliverables (Reels/Stories), desired creator criteria (e.g., minimum 1,000 followers, food niche), total creator quota, and the cashback percentage. Our team reviews and launches it within hours.'
  },
  {
    id: 'r4',
    audience: 'restaurant',
    question: 'How are creators selected?',
    answer: 'Creators apply through our website. You can either enable automated matching based on your pre-set criteria or manually review and approve each creator profile, recent reels, and follower analytics.'
  },
  {
    id: 'r5',
    audience: 'restaurant',
    question: 'Can I choose creators myself?',
    answer: 'Yes. Restaurant managers have full control to review applicant handles, preview past content aesthetics, check engagement, and accept or decline with a single click.'
  },
  {
    id: 'r6',
    audience: 'restaurant',
    question: 'What type of content will creators create?',
    answer: 'Creators produce organic Instagram Reels, tasting reviews, dish highlights, aesthetic venue tours, and real-time Stories tagging your handle and geo-location.'
  },
  {
    id: 'r7',
    audience: 'restaurant',
    question: 'Can I set the cashback amount?',
    answer: 'No. The cashback percentage is predetermined for each campaign and is not based on a percentage selected by you. Cashback can range from 30% to 90%, depending on the campaign requirements and deliverables.'
  },
  {
    id: 'r8',
    audience: 'restaurant',
    question: 'How do I track campaign performance?',
    answer: 'You will receive a Creatzaar Restaurant Excel sheet showing all participating creators, direct links to their posted Reels and Stories, verified reach, and engagement metrics.'
  },
  {
    id: 'r9',
    audience: 'restaurant',
    question: 'Can I run multiple campaigns?',
    answer: 'Yes! Many brands run a weekday lunch campaign, a weekend brunch creator push, and a signature chef special campaign simultaneously across multiple outlet locations.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  // Restaurant Topics
  {
    id: 'rest-1',
    title: 'How Restaurants Can Use Instagram Creators to Fill Tables in 2026',
    slug: 'how-restaurants-can-use-instagram-creators',
    target: 'restaurants',
    category: 'Restaurant Growth',
    readTime: '6 min read',
    date: 'March 2026',
    snippet: 'Why user-generated content from genuine foodies outperforms traditional food photography and paid display ads by over 4x.',
    author: 'Creatzaar Growth Team',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    content: [
      'In 2026, dining decisions are overwhelmingly driven by social visual proof. Before guests choose where to eat on a Friday evening, they search Instagram location tags, watch short Reels, and check what real people are eating.',
      'Traditional food styling photos on static menus feel staged. When a local creator holds a cheese-pull slice or sips an iced matcha latte while smiling naturally, viewers immediately envision themselves having that exact experience.',
      'By turning regular dining into creator campaigns, restaurants build consistent content pipelines without spending thousands on dedicated production crews every month.'
    ]
  },
  {
    id: 'rest-2',
    title: 'Micro Influencer Marketing for Restaurants: The Complete Playbook',
    slug: 'micro-influencer-marketing-restaurants',
    target: 'restaurants',
    category: 'Influencer Marketing',
    readTime: '8 min read',
    date: 'March 2026',
    snippet: 'Why partnering with 20 creators who each have 5,000 local followers drives far more footfall than one mega-influencer with 500k global followers.',
    author: 'Vikram Mehta',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
    content: [
      'The biggest myth in restaurant marketing is that follower count correlates with foot traffic. A celebrity influencer with 500,000 followers might have an audience scattered across the globe who will never visit your specific neighborhood.',
      'In contrast, a micro-creator with 5,000 followers who lives within 5 kilometers of your café commands intense local trust. Their followers are friends, coworkers, and neighborhood locals looking for weekend hangout spots.',
      'Creatzaar enables you to activate dozens of these local voices in a unified, automated campaign.'
    ]
  },
  {
    id: 'rest-3',
    title: 'How Cafés Can Get More Instagram Exposure on Weekdays',
    slug: 'how-cafes-get-more-instagram-exposure',
    target: 'restaurants',
    category: 'Café Marketing',
    readTime: '5 min read',
    date: 'February 2026',
    snippet: 'Practical strategies to solve the Tuesday-to-Thursday afternoon lull using targeted creator incentives and aesthetic beverage campaigns.',
    author: 'Ananya Sharma',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
    content: [
      'Almost every specialty café experiences steady weekend rushes followed by quiet mid-week afternoons. Creatzaar campaigns allow you to restrict creator visits specifically to off-peak hours.',
      'By offering 80% to 90% cashback on Tuesday through Thursday visits between 2 PM and 6 PM, you fill empty tables with enthusiastic creators taking aesthetic workspace shots, laptop vibes, and latte art videos.',
      'This creates a flywheel: their content goes viral just in time for weekend cravings.'
    ]
  },
  {
    id: 'rest-4',
    title: 'Restaurant Marketing Ideas for 2026: What Works and What Fails',
    slug: 'restaurant-marketing-ideas-2026',
    target: 'restaurants',
    category: 'Industry Trends',
    readTime: '7 min read',
    date: 'January 2026',
    snippet: 'An honest review of billboard ads, discount aggregators, loyalty apps, and creator cashback systems.',
    author: 'Creatzaar Research',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop',
    content: [
      'Aggregator platforms charge heavy commission cuts while commoditizing your brand into a price war. Billboards provide no trackable attribution.',
      'The modern restaurant strategy combines organic word-of-mouth with creator amplification. When dining feels like an experience worth filming, your customers become your organic marketing department.'
    ]
  },
  {
    id: 'rest-5',
    title: 'Creator Marketing vs Traditional Influencer Marketing for Food Brands',
    slug: 'creator-marketing-vs-traditional-influencer-marketing',
    target: 'restaurants',
    category: 'Strategy',
    readTime: '6 min read',
    date: 'January 2026',
    snippet: 'Why the old model of paying ₹25,000 for a single sponsored post is broken, and how campaign cashback fixes incentives.',
    author: 'Vikram Mehta',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    content: [
      'Traditional influencer marketing treats creators like billboard space: flat fees, forced captions, and zero accountability for actual food consumption.',
      'Creator marketing on Creatzaar aligns incentives: creators order the items they actually want to eat, experience genuine hospitality, and earn cashback based on published, quality deliverables.'
    ]
  },
  {
    id: 'rest-6',
    title: 'How to Run a Restaurant Influencer Campaign from Scratch',
    slug: 'how-to-run-restaurant-influencer-campaign',
    target: 'restaurants',
    category: 'Guide',
    readTime: '9 min read',
    date: 'December 2025',
    snippet: 'Step-by-step checklist: defining deliverables, setting guidelines, vetting applications, and tracking ROI.',
    author: 'Creatzaar Ops',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    content: [
      'Follow this 5-point checklist before your first creator walks in: 1. Ensure staff know creators are coming; 2. Define 2-3 signature hero dishes with photogenic plating; 3. Have crisp lighting at key tables; 4. Set clear reel deliverables; 5. Monitor and amplify every tagged story.'
    ]
  },

  // Creator Topics
  {
    id: 'creat-1',
    title: 'How Small Instagram Creators Can Get Brand Collaborations in 2026',
    slug: 'how-small-creators-get-brand-collaborations',
    target: 'creators',
    category: 'Creator Growth',
    readTime: '5 min read',
    date: 'March 2026',
    snippet: 'You do not need 50k followers to work with amazing brands. Here is how nano-creators earn free dining and cashback today.',
    author: 'Riya Sen (Creator Coach)',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    content: [
      'Brands no longer judge creators strictly by vanity follower counts. Engagement rate, video clarity, audio design, and niche authenticity matter significantly more.',
      'If you have 1,500 active followers who trust your local recommendations, you are deeply valuable to neighborhood restaurants. Creatzaar gives you instant access to these campaigns without cold DMs.'
    ]
  },
  {
    id: 'creat-2',
    title: 'How to Monetize a Small Instagram Audience Without Being Salesy',
    slug: 'how-to-monetize-small-instagram-audience',
    target: 'creators',
    category: 'Monetization',
    readTime: '7 min read',
    date: 'February 2026',
    snippet: 'Cut out cheesy sponsored product ads. Earn through dining cashback, affiliate perks, and UGC production.',
    author: 'Riya Sen',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    content: [
      'Your audience follows you because they appreciate your taste. When you post a fake product you do not use, you erode trust.',
      'With dining cashback on Creatzaar, you are eating food you genuinely enjoy, shooting in your natural style, and keeping 30% to 90% of your bill in your pocket.'
    ]
  },
  {
    id: 'creat-3',
    title: 'How Food Creators Can Get Restaurant Collaborations That Actually Pay',
    slug: 'how-food-creators-get-restaurant-collaborations',
    target: 'creators',
    category: 'Partnerships',
    readTime: '6 min read',
    date: 'February 2026',
    snippet: 'Moving beyond "free dessert" barter into predictable cashback rewards and high-value brand partnerships.',
    author: 'Creatzaar Creator Team',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    content: [
      'Too many restaurants offer insultingly low barter (like a free coffee for a full carousel post). Creatzaar formalizes campaigns so expectations and high cashback are agreed upfront.'
    ]
  },
  {
    id: 'creat-4',
    title: 'Nano Influencer Opportunities in India: Why 2026 is the Golden Era',
    slug: 'nano-influencer-opportunities-india',
    target: 'creators',
    category: 'Industry Trends',
    readTime: '5 min read',
    date: 'January 2026',
    snippet: 'From Delhi to Bengaluru and Mumbai to Pune: how regional dining culture is fueling creator-first growth.',
    author: 'Aditya Verma',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop',
    content: [
      'Tier 1 and Tier 2 cities in India are seeing a boom in specialty dining, artisanal roasteries, and experimental kitchens. These venues need hyper-local creators who can communicate their vibe in regional and conversational tones.'
    ]
  },
  {
    id: 'creat-5',
    title: 'How to Create Better Restaurant Reels: Lighting, Pacing, and Hooks',
    slug: 'how-to-create-better-restaurant-reels',
    target: 'creators',
    category: 'Content Creation',
    readTime: '8 min read',
    date: 'December 2025',
    snippet: 'Camera angles, dynamic zoom cuts, ambient mic techniques, and hook formulations to double your average view count.',
    author: 'Kabir & Team',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800&auto=format&fit=crop',
    content: [
      'Tip 1: Hook the viewer in the first 1.5 seconds with an appetizing action shot (sizzling plate, steam rising, pouring sauce). Tip 2: Natural window light always beats harsh overhead spotlights. Tip 3: Capture clean natural sound (crunch, sizzle, glass clink) for higher retention.'
    ]
  }
];
