import React from 'react';

const Template6 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;
  return (
    <div className="font-sans bg-white text-gray-900 max-w-4xl mx-auto shadow-lg">
      <div className="bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold tracking-wider">{personalInfo?.fullName || 'Your Name'}</h1>
        <p className="text-sm text-gray-300">{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
      </div>
      <div className="p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          {summary && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Profile</h2><p className="text-sm mt-1">{summary}</p></div>}
          {experience && experience.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Experience</h2>{experience.map((exp,i)=><div key={i} className="mt-2"><h3 className="font-semibold">{exp.position}</h3><p className="text-sm text-gray-600">{exp.company} | {exp.startDate} - {exp.endDate}</p><p className="text-sm">{exp.description}</p></div>)}</div>}
          {projects && projects.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Projects</h2>{projects.map((proj,i)=><div key={i} className="mt-1"><h3 className="font-semibold">{proj.name}</h3><p className="text-sm">{proj.description}</p></div>)}</div>}
        </div>
        <div className="space-y-4">
          {education && education.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Education</h2>{education.map((edu,i)=><div key={i} className="mt-1"><h3 className="font-semibold">{edu.institution}</h3><p className="text-sm">{edu.degree}</p><p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p></div>)}</div>}
          {skills && skills.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Skills</h2><ul className="list-disc pl-5 text-sm mt-1">{skills.map((s,i)=><li key={i}>{s}</li>)}</ul></div>}
          {certifications && certifications.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-1">Certifications</h2><ul className="list-disc pl-5 text-sm mt-1">{certifications.map((c,i)=><li key={i}>{c.name} - {c.issuer}</li>)}</ul></div>}
        </div>
      </div>
    </div>
  );
};
export default Template6;