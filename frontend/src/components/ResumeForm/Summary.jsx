import React from 'react';
import { useFormContext } from 'react-hook-form';

const Summary = () => {
  const { register } = useFormContext();
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Professional Summary</h3>
      <textarea {...register('summary')} rows="4" className="input" placeholder="Write a brief summary..." />
    </div>
  );
};

export default Summary;