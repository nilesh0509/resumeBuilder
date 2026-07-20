import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumeForm from '../components/ResumeForm/ResumeForm';
import { getById } from '../services/resumeService';
import LoadingSpinner from '../components/common/LoadingSpinner';

const EditResume = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getById(id)
      .then((res) => setInitialData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!initialData) return <div>Resume not found</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Resume</h1>
      <ResumeForm initialData={initialData} resumeId={id} />
    </div>
  );
};

export default EditResume;