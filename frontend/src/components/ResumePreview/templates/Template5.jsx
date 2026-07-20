import React from 'react';

const Template5 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;
  return (
    <div className="font-sans bg-white text-gray-800 p-6 max-w-4xl mx-auto shadow-lg text-sm">
      <div className="flex justify-between items-start border-b border-gray-300 pb-2 mb-4">
        <div><h1 className="text-2xl font-bold">{personalInfo?.fullName || 'Your Name'}</h1><p className="text-gray-600">{personalInfo?.email} | {personalInfo?.phone}</p></div>
        <div className="text-right text-xs text-gray-500">{personalInfo?.address}</div>
      </div>
      {summary && <p className="mb-4 text-gray-700">{summary}</p>}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {experience && experience.length > 0 && <div className="mb-4"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">Experience</h2>{experience.map((exp,i)=><div key={i} className="mt-2"><h3 className="font-semibold">{exp.position}</h3><p className="text-gray-600 text-xs">{exp.company} | {exp.startDate} - {exp.endDate}</p><p className="text-xs">{exp.description}</p></div>)}</div>}
          {projects && projects.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">Projects</h2>{projects.map((proj,i)=><div key={i} className="mt-1"><h3 className="font-semibold">{proj.name}</h3><p className="text-xs">{proj.description}</p></div>)}</div>}
        </div>
        <div>
          {education && education.length > 0 && <div className="mb-4"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">Education</h2>{education.map((edu,i)=><div key={i} className="mt-1"><h3 className="font-semibold text-xs">{edu.institution}</h3><p className="text-xs">{edu.degree}</p><p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p></div>)}</div>}
          {skills && skills.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">Skills</h2><ul className="list-disc pl-4 text-xs">{skills.map((s,i)=><li key={i}>{s}</li>)}</ul></div>}
        </div>
      </div>
    </div>
  );
};
export default Template5;