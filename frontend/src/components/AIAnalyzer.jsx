import React, { useState } from 'react';
import { analyze } from '../services/aiService';
import { SparklesIcon } from '@heroicons/react/24/outline';

const AIAnalyzer = ({ resume }) => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await analyze(resume);
      setAnalysis(res.data);
    } catch (err) {
      setError('AI analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-premium">
      <button
        onClick={handleAnalyze}
        className={`
          w-full py-3 px-4 rounded-xl text-sm sm:text-base font-semibold
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          text-white shadow-lg hover:shadow-indigo-500/30
          transition-all duration-300 hover:scale-[1.02] active:scale-95
          flex items-center justify-center gap-2
          ${loading ? 'opacity-75 cursor-not-allowed' : ''}
        `}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            <span>Analyzing...</span>
          </>
        ) : (
          <>
            <SparklesIcon className="h-5 w-5" />
            <span>Analyze Resume with AI</span>
          </>
        )}
      </button>

      {error && (
        <div className="mt-4 text-red-600 dark:text-red-400 text-sm">{error}</div>
      )}

      {analysis && (
        <div className="mt-6 animate-fade-in-up">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-gradient">
              Score: {analysis.score}/100
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-1000"
                style={{ width: `${analysis.score}%` }}
              />
            </div>
          </div>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            {analysis.suggestions.map((s, i) => (
              <li key={i} className="text-sm sm:text-base">{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIAnalyzer;