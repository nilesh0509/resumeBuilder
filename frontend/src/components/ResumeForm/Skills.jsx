import React from 'react';
import { useFormContext } from 'react-hook-form';

const Skills = () => {
  const { register } = useFormContext();
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Skills</h3>
      <input
        {...register('skills')}
        placeholder="Enter skills separated by commas (e.g., React, Node.js, MongoDB)"
        className="input"
      />
      <p className="text-sm text-gray-500 mt-1">Separate each skill with a comma</p>
    </div>
  );
};

export default Skills;