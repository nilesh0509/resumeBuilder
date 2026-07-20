import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/resumeService';
import Preview from '../components/ResumePreview/Preview';
import AIAnalyzer from '../components/AIAnalyzer';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ViewResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  useEffect(() => {
    getById(id)
      .then((res) => {
        setResume(res.data);
        setSelectedTemplate(res.data.template || 'modern');
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!resume) return <div>Resume not found</div>;

  const templateNames = ['modern','minimal','creative','elegant','compact','executive','tech','classic'];

  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto px-4 py-6">
      <section className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h2 className="text-2xl font-bold text-gradient whitespace-nowrap">📄 Resume Preview</h2>
          <div className="flex flex-nowrap gap-1 overflow-x-auto pb-1 max-w-full">
            {templateNames.map((name) => (
              <button
                key={name}
                onClick={() => setSelectedTemplate(name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedTemplate === name
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full rounded-xl shadow-lg">
          <Preview resume={resume} template={selectedTemplate} />
        </div>
      </section>
      <section className="w-full mt-8 border-t-2 border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-gradient mb-4">🤖 AI Analysis</h2>
        <AIAnalyzer resume={resume} />
      </section>
    </div>
  );
};

export default ViewResume;