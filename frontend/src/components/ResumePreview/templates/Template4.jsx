import React from 'react';

const Template4 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;
  return (
    <div className="font-serif bg-white text-gray-800 p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
      <div className="text-center border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-4xl font-light uppercase tracking-widest">{personalInfo?.fullName || 'Your Name'}</h1>
        <p className="text-sm text-gray-500 mt-1">{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
      </div>
      {summary && <div className="mb-6"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Profile</h2><p className="text-sm leading-relaxed">{summary}</p></div>}
      <div className="grid grid-cols-2 gap-6">
        <div>
          {experience && experience.length > 0 && <div className="mb-6"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Experience</h2>{experience.map((exp,i)=><div key={i} className="mb-3"><h3 className="font-semibold">{exp.position}</h3><p className="text-sm text-gray-600">{exp.company} | {exp.startDate} - {exp.endDate}</p><p className="text-sm">{exp.description}</p></div>)}</div>}
          {projects && projects.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Projects</h2>{projects.map((proj,i)=><div key={i} className="mb-2"><h3 className="font-semibold">{proj.name}</h3><p className="text-sm">{proj.description}</p></div>)}</div>}
        </div>
        <div>
          {education && education.length > 0 && <div className="mb-6"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Education</h2>{education.map((edu,i)=><div key={i} className="mb-2"><h3 className="font-semibold">{edu.institution}</h3><p className="text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</p><p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p></div>)}</div>}
          {skills && skills.length > 0 && <div className="mb-6"><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Skills</h2><ul className="list-disc pl-5 text-sm">{skills.map((s,i)=><li key={i}>{s}</li>)}</ul></div>}
          {certifications && certifications.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Certifications</h2><ul className="list-disc pl-5 text-sm">{certifications.map((c,i)=><li key={i}>{c.name} - {c.issuer}</li>)}</ul></div>}
        </div>
      </div>
    </div>
  );
};
export default Template4;