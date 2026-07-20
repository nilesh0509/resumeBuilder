import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { create, update } from '../../services/resumeService';
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Achievements from './Achievements';

const ResumeForm = ({ initialData, resumeId }) => {
  const methods = useForm({ defaultValues: initialData || {} });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Convert comma-separated strings to arrays
      if (typeof data.skills === 'string') {
        data.skills = data.skills.split(',').map(s => s.trim()).filter(Boolean);
      }
      if (typeof data.achievements === 'string') {
        data.achievements = data.achievements.split(',').map(s => s.trim()).filter(Boolean);
      }
      // For projects, technologies field is stored as string, we need to split into array
      if (data.projects && data.projects.length) {
        data.projects = data.projects.map(proj => ({
          ...proj,
          technologies: typeof proj.technologies === 'string'
            ? proj.technologies.split(',').map(s => s.trim()).filter(Boolean)
            : proj.technologies || []
        }));
      }

      if (resumeId) {
        await update(resumeId, data);
      } else {
        await create(data);
      }
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to save resume');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <PersonalInfo />
        <Summary />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            {resumeId ? 'Update' : 'Create'} Resume
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResumeForm;