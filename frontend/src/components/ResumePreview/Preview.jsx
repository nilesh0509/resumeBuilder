import React from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";
import Template6 from "./templates/Template6";
import Template7 from "./templates/Template7";
import Template8 from "./templates/Template8";
import PDFExport from "./PDFExport";

const Preview = ({ resume, template }) => {
  const templates = {
    modern: Template1,
    minimal: Template2,
    creative: Template3,
    elegant: Template4,
    compact: Template5,
    executive: Template6,
    tech: Template7,
    classic: Template8,
  };
  const SelectedTemplate = templates[template] || Template1;

  return (
    <div className="relative w-full">
      {/* Resume template - fully visible */}
      <div
        id="resume-preview"
        className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-inner"
      >
        <SelectedTemplate resume={resume} />
      </div>
      {/* PDF Export - below the template */}
      <div className="mt-4 flex justify-end">
        <PDFExport
          elementId="resume-preview"
          filename={`${resume.personalInfo?.fullName || "resume"}.pdf`}
        />
      </div>
    </div>
  );
};

export default Preview;
