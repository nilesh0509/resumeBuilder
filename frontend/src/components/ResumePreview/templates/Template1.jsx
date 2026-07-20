import React from 'react';

const Template1 = ({ resume }) => {
  const { personalInfo, summary, education, experience, skills, projects, certifications, achievements } = resume;

  return (
    <div className="font-sans bg-white text-gray-800 p-8 max-w-4xl mx-auto shadow-lg print:shadow-none">
      {/* Header - Name & Contact */}
      <div className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
          {personalInfo?.fullName || 'YOUR NAME'}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
          {personalInfo?.phone && <span>{personalInfo.phone}</span>}
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.portfolio && <span>{personalInfo.portfolio}</span>}
          {personalInfo?.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo?.github && <span>{personalInfo.github}</span>}
        </div>
      </div>

      {/* Objective / Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Objective
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex flex-wrap justify-between items-start">
                <h3 className="font-semibold text-gray-800 text-base">{edu.institution || 'Institution'}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {edu.location && `${edu.location} | `}
                  {edu.startDate && edu.endDate && `${edu.startDate} - ${edu.endDate}`}
                </span>
              </div>
              <p className="text-sm text-gray-700">
                {edu.degree} {edu.field && `in ${edu.field}`} {edu.gpa && `– ${edu.gpa} CGPA`}
              </p>
              {edu.description && <p className="text-sm text-gray-600 mt-1">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <div className="flex flex-wrap justify-between items-start">
                <h3 className="font-semibold text-gray-800 text-base">{proj.name || 'Project'}</h3>
                {proj.date && <span className="text-sm text-gray-500 whitespace-nowrap">{proj.date}</span>}
              </div>
              {proj.description && (
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {proj.description.split('. ').map((point, idx) => (
                    point.trim() && <li key={idx} className="text-sm text-gray-700">{point.trim()}.</li>
                  ))}
                </ul>
              )}
              {proj.technologies && proj.technologies.length > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium">Tech:</span> {proj.technologies.join(', ')}
                </p>
              )}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-sm hover:underline">
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Technical Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {skills.map((skill, i) => (
              <div key={i} className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Soft Skills / Achievements / Certifications */}
      {(achievements || certifications) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            {achievements && achievements.length > 0 && !certifications ? 'Soft Skills' : 
             certifications && certifications.length > 0 && !achievements ? 'Certifications' : 
             'Additional Information'}
          </h2>
          {achievements && achievements.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {achievements.map((ach, i) => (
                <li key={i} className="text-sm text-gray-700">{ach}</li>
              ))}
            </ul>
          )}
          {certifications && certifications.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {certifications.map((cert, i) => (
                <li key={i} className="text-sm text-gray-700">
                  {cert.name} {cert.issuer && `- ${cert.issuer}`}
                  {cert.date && ` (${cert.date})`}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Experience (if any) */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Experience
          </h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <div className="flex flex-wrap justify-between items-start">
                <h3 className="font-semibold text-gray-800 text-base">{exp.position || 'Position'}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {exp.company && `${exp.company} | `}
                  {exp.startDate && exp.endDate && `${exp.startDate} - ${exp.endDate}`}
                </span>
              </div>
              {exp.description && <p className="text-sm text-gray-700 mt-1">{exp.description}</p>}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="text-sm text-gray-700">{a}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template1;