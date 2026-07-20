exports.analyzeResume = async (req, res) => {
  try {
    const resumeData = req.body;

  
    if (!resumeData || Object.keys(resumeData).length === 0) {
      return res.status(400).json({ error: 'Resume data is required' });
    }

    const mockSuggestions = [
      'Improve summary section by quantifying achievements (e.g., "increased sales by 20%").',
      'Add measurable outcomes to work experience (e.g., "led a team of 5 to deliver project ahead of schedule").',
      'Include more technical keywords like React, Node.js, MongoDB to improve ATS score.',
      'Enhance project descriptions by mentioning challenges faced and solutions implemented.',
      'Add a certifications section if applicable (e.g., AWS, Google, etc.).',
      'Use action verbs like "developed", "implemented", "designed" instead of "responsible for".',
    ];


    const score = Math.floor(Math.random() * 20) + 70;

    res.json({
      score,
      suggestions: mockSuggestions,
    });
  } catch (err) {
    console.error('AI Error:', err.message);
    res.status(500).json({ error: 'AI analysis failed: ' + err.message });
  }
};