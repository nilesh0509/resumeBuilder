import React from 'react';

const Template3 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;

  return (
    <div className="font-sans bg-white text-gray-800 p-8 max-w-4xl mx-auto shadow-lg border-t-8 border-blue-500">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar - accent color */}
        <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-blue-800">{personalInfo?.fullName || 'Your Name'}</h1>
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="font-semibold">Email:</span> {personalInfo?.email}</p>
            <p><span className="font-semibold">Phone:</span> {personalInfo?.phone}</p>
            <p><span className="font-semibold">Address:</span> {personalInfo?.address}</p>
            <p><span className="font-semibold">LinkedIn:</span> {personalInfo?.linkedin}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Skills</h2>
            <ul className="list-disc pl-5 mt-2">
              {skills?.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-300 pb-1">Certifications</h2>
            {certifications?.map((cert, i) => (
              <div key={i} className="mt-2">
                <p><strong>{cert.name}</strong></p>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right content */}
        <div className="md:w-2/3 space-y-6">
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
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Achievements</h2>
            <ul className="list-disc pl-5">
              {achievements?.map((ach, i) => <li key={i}>{ach}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template3;