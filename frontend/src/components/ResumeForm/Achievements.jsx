import React from 'react';
import { useFormContext } from 'react-hook-form';

const Achievements = () => {
  const { register } = useFormContext();
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Achievements</h3>
      <input
        {...register('achievements')}
        placeholder="Enter achievements separated by commas"
        className="input"
      />
    </div>
  );
};

export default Achievements;