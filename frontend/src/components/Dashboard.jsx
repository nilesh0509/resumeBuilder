import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useResume } from '../../context/ResumeContext';
import ResumeCard from './ResumeCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { FiPlus } from 'react-icons/fi';

const Dashboard = () => {
  const { resumes, loading, fetchResumes } = useResume();

  useEffect(() => {
    fetchResumes();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Resumes</h1>
        <Link
          to="/builder"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FiPlus /> Create New
        </Link>
      </div>
      {resumes.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-12">
          <p className="text-xl">No resumes yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <ResumeCard key={resume._id} resume={resume} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;