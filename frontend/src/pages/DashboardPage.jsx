import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll, deleteResume } from '../services/resumeService';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from '../components/common/LoadingSpinner';

const DashboardPage = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await getAll();
        setResumes(res.data);
      } catch (err) {
        setError('Failed to load resumes');
      } finally {
        setLoading(false);
      }
    };
    fetchResumes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteResume(id);
        setResumes(resumes.filter((r) => r._id !== id));
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 animate-fade-in-up">{error}</div>;

  return (
    <div className="animate-fade-in-up">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card-premium">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Resumes</p>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{resumes.length}</p>
        </div>
        <div className="card-premium">
          <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
          <p className="text-lg font-semibold">
            {resumes.length > 0
              ? new Date(resumes[0]?.updatedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : '—'}
          </p>
        </div>
        <div className="card-premium">
          <p className="text-sm text-gray-500 dark:text-gray-400">Templates</p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</p>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-gradient">Your Resumes</h1>
        <Link
          to="/create"
          className="btn-gradient flex items-center gap-2 px-6 py-3"
        >
          <PlusIcon className="h-5 w-5" /> Create New
        </Link>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-16 card-premium max-w-2xl mx-auto">
          <DocumentTextIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">No Resumes Yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Create your first professional resume with AI suggestions.
          </p>
          <Link to="/create" className="btn-gradient mt-6 inline-block">
            Get Started
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <div
              key={resume._id}
              className="card-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold truncate">
                    {resume.personalInfo?.fullName || 'Untitled Resume'}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Updated: {new Date(resume.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Link
                  to={`/edit/${resume._id}`}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                >
                  <PencilIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </Link>
                <Link
                  to={`/view/${resume._id}`}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                >
                  <EyeIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </Link>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700/50 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors duration-200"
                >
                  <TrashIcon className="h-4 w-4 text-gray-600 dark:text-gray-300 hover:text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;