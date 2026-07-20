const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    template: { type: String, default: 'modern' },
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
      portfolio: String,
    },
    summary: String,
    education: [
      {
        institution: String,
        degree: String,
        field: String,
        startDate: Date,
        endDate: Date,
        gpa: Number,
        description: String,
      },
    ],
    experience: [
      {
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String,
        achievements: [String],
      },
    ],
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        link: String,
        technologies: [String],
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        date: Date,
        link: String,
      },
    ],
    achievements: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resume', ResumeSchema);