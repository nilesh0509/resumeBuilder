import React from 'react';

const Template7 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;
  return (
    <div className="font-mono bg-gray-900 text-gray-100 p-8 max-w-4xl mx-auto shadow-lg border border-gray-700">
      <div className="border-l-4 border-blue-400 pl-4 mb-6">
        <h1 className="text-3xl font-bold text-blue-400">{personalInfo?.fullName || 'Your Name'}</h1>
        <p className="text-sm text-gray-400">{personalInfo?.email} | {personalInfo?.phone}</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          {summary && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Summary</h2><p className="text-sm mt-1">{summary}</p></div>}
          {experience && experience.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Experience</h2>{experience.map((exp,i)=><div key={i} className="mt-2"><h3 className="font-semibold">{exp.position}</h3><p className="text-sm text-gray-400">{exp.company} | {exp.startDate} - {exp.endDate}</p><p className="text-sm">{exp.description}</p></div>)}</div>}
          {projects && projects.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Projects</h2>{projects.map((proj,i)=><div key={i} className="mt-1"><h3 className="font-semibold">{proj.name}</h3><p className="text-sm">{proj.description}</p></div>)}</div>}
        </div>
        <div className="space-y-4">
          {education && education.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Education</h2>{education.map((edu,i)=><div key={i} className="mt-1"><h3 className="font-semibold">{edu.institution}</h3><p className="text-sm">{edu.degree}</p><p className="text-sm text-gray-400">{edu.startDate} - {edu.endDate}</p></div>)}</div>}
          {skills && skills.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Skills</h2><ul className="list-disc pl-5 text-sm mt-1">{skills.map((s,i)=><li key={i}>{s}</li>)}</ul></div>}
          {certifications && certifications.length > 0 && <div><h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-gray-700 pb-1">Certs</h2><ul className="list-disc pl-5 text-sm mt-1">{certifications.map((c,i)=><li key={i}>{c.name}</li>)}</ul></div>}
        </div>
      </div>
    </div>
  );
};
export default Template7;