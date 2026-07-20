import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'; // ✅ v2

const Projects = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        <button
          type="button"
          onClick={() => append({ name: '', description: '', link: '', technologies: '' })}
          className="btn btn-primary btn-sm"
        >
          <PlusIcon className="h-4 w-4 mr-1" /> Add
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="border dark:border-gray-700 p-4 rounded-lg mb-4 relative">
          <button
            type="button"
            onClick={() => remove(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input {...register(`projects.${index}.name`)} placeholder="Project Name" className="input" />
            <input {...register(`projects.${index}.link`)} placeholder="Link (optional)" className="input" />
            <input
              {...register(`projects.${index}.technologies`)}
              placeholder="Technologies (comma separated)"
              className="input"
            />
          </div>
          <textarea
            {...register(`projects.${index}.description`)}
            rows="2"
            className="input mt-2"
            placeholder="Description"
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;