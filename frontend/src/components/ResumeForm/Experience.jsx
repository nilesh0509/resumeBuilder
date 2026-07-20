import React from 'react';
import { useFormContext } from 'react-hook-form';

const Experience = () => {
  const { register } = useFormContext();
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Experience</h3>
      <input
        {...register('achievements')}
        placeholder="Enter achievements separated by commas"
        className="input"
      />
      <p className="text-sm text-gray-500 mt-1">Separate each achievement with a comma</p>
    </div>
  );
};

export default Experience; 