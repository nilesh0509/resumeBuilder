const Resume = require('../models/Resume');

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.userId }).sort({
      updatedAt: -1,
    });
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.createResume = async (req, res) => {
  try {
    const resumeData = { ...req.body, userId: req.userId };
    const resume = new Resume(resumeData);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }

    // Update fields
    const updatedData = req.body;
    // Remove userId from updatedData to prevent overwrite
    delete updatedData.userId;
    resume = await Resume.findByIdAndUpdate(
      req.params.id,
      { $set: updatedData },
      { new: true, runValidators: true }
    );
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }
    res.json({ msg: 'Resume deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};