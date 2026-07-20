import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFExport = ({ elementId, filename }) => {
  const handleExport = () => {
    const element = document.getElementById(elementId);
    if (!element) return;
    html2canvas(element, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(filename);
    });
  };

  return (
    <button onClick={handleExport} className="btn btn-primary">
      Download PDF
    </button>
  );
};

export default PDFExport;