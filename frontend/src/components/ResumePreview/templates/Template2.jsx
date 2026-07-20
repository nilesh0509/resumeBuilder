import React from 'react';

const Template2 = ({ resume }) => {   // ✅ Correct name: Template2 (not Tamplate2)
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;

  return (
    <div className="font-sans bg-white text-gray-800 p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
      {/* Header - Simple centered */}
      <div className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold">{personalInfo?.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 mt-2 text-sm">
          <span>{personalInfo?.email}</span>
          <span>{personalInfo?.phone}</span>
          <span>{personalInfo?.address}</span>
          <span>{personalInfo?.linkedin}</span>
        </div>
      </div>

      {/* Single column layout - ATS friendly */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Summary</h2>
          <p className="mt-2">{summary || 'Professional summary goes here.'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Experience</h2>
          {experience?.map((exp, i) => (
            <div key={i} className="mt-4">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} | {exp.startDate} - {exp.endDate}</p>
              <p>{exp.description}</p>
              {exp.achievements && (
                <ul className="list-disc pl-5">
                  {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Education</h2>
          {education?.map((edu, i) => (
            <div key={i} className="mt-4">
              <h3 className="font-bold">{edu.institution}</h3>
              <p>{edu.degree} in {edu.field}</p>
              <p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Skills</h2>
          <ul className="list-disc pl-5 mt-2">
            {skills?.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Projects</h2>
          {projects?.map((proj, i) => (
            <div key={i} className="mt-4">
              <h3 className="font-bold">{proj.name}</h3>
              <p>{proj.description}</p>
              <p className="text-sm text-gray-500">Tech: {proj.technologies?.join(', ')}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Certifications</h2>
          {certifications?.map((cert, i) => (
            <div key={i} className="mt-2">
              <p><strong>{cert.name}</strong> - {cert.issuer}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Achievements</h2>
          <ul className="list-disc pl-5">
            {achievements?.map((ach, i) => <li key={i}>{ach}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template2;   