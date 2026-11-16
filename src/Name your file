import React, { useState } from 'react';

interface ScoreResult {
  username: string;
  followers: number;
  engagementRate: string;
  creatorScore: number;
  status: string;
}

export const ScoreChecker: React.FC = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState('');

  const handleCheckScore = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUsername = username.replace('@', '').trim();
    if (!cleanUsername) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/.netlify/functions/get-score?username=${encodeURIComponent(cleanUsername)}`);
      const data = await response.json();

      if (!response.ok || data.error || data.metaError) {
        setError(data.metaError || data.error || 'Account public Business/Creator hona chahiye.');
      } else {
        setResult(data);
      }
    } catch {
      setError('Server se connect nahi ho paaya. Dobara koshish karein.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#a3e635]/10 text-[#a3e635] rounded-full mb-3">
            Live Audit Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Check Your <span className="text-[#a3e635]">Creatzaar Score</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Apna Instagram Creator/Business username daalein aur real engagement & authenticity score dekhein.
          </p>
        </div>

        <form onSubmit={handleCheckScore} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Instagram username (e.g. nitishtalkbusiness1)"
            className="flex-1 bg-[#080d1a] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#a3e635] hover:bg-[#84cc16] text-[#080d1a] font-bold px-6 py-3 rounded-xl transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Scanning...' : 'Check Score'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 bg-[#080d1a] border border-slate-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Verified Handle</p>
                <h3 className="text-xl font-bold text-white">@{result.username}</h3>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-slate-400 text-xs uppercase tracking-wider">Creatzaar Score</p>
                <div className="text-3xl font-extrabold text-[#a3e635]">
                  {result.creatorScore}<span className="text-base text-slate-500">/100</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
              <div className="bg-[#0f172a] p-3 rounded-lg">
                <p className="text-slate-400 text-xs">Followers</p>
                <p className="text-lg font-bold text-white mt-1">{result.followers.toLocaleString()}</p>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-lg">
                <p className="text-slate-400 text-xs">Engagement Rate</p>
                <p className="text-lg font-bold text-white mt-1">{result.engagementRate}</p>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-lg">
                <p className="text-slate-400 text-xs">Audience Quality</p>
                <p className="text-sm font-bold text-[#a3e635] mt-1.5">{result.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
