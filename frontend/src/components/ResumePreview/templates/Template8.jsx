import React from 'react';

const Template8 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;
  return (
    <div className="font-serif bg-white text-gray-800 p-8 max-w-4xl mx-auto shadow-lg border border-gray-300">
      <div className="text-center pb-4 mb-6 border-b-2 border-double border-gray-400">
        <h1 className="text-5xl font-bold tracking-tight">{personalInfo?.fullName || 'Your Name'}</h1>
        <p className="text-sm text-gray-600 mt-2">{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
      </div>
      {summary && <div className="mb-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 text-center">Professional Summary</h2><p className="text-sm text-center italic mt-1">{summary}</p></div>}
      <div className="grid grid-cols-2 gap-8">
        <div>
          {experience && experience.length > 0 && <div className="mb-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1">Experience</h2>{experience.map((exp,i)=><div key={i} className="mt-2"><h3 className="font-bold">{exp.position}</h3><p className="text-sm text-gray-600">{exp.company} | {exp.startDate} - {exp.endDate}</p><p className="text-sm">{exp.description}</p></div>)}</div>}
          {projects && projects.length > 0 && <div><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1">Projects</h2>{projects.map((proj,i)=><div key={i} className="mt-2"><h3 className="font-bold">{proj.name}</h3><p className="text-sm">{proj.description}</p></div>)}</div>}
        </div>
        <div>
          {education && education.length > 0 && <div className="mb-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1">Education</h2>{education.map((edu,i)=><div key={i} className="mt-2"><h3 className="font-bold">{edu.institution}</h3><p className="text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</p><p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p></div>)}</div>}
          {skills && skills.length > 0 && <div className="mb-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1">Skills</h2><ul className="list-disc pl-5 text-sm mt-1">{skills.map((s,i)=><li key={i}>{s}</li>)}</ul></div>}
          {certifications && certifications.length > 0 && <div><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1">Certifications</h2><ul className="list-disc pl-5 text-sm mt-1">{certifications.map((c,i)=><li key={i}>{c.name}</li>)}</ul></div>}
        </div>
      </div>
    </div>
  );
};
export default Template8;