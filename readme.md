# 🚀 Smart Resume Builder with AI Suggestions

<div align="center">

![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

### Build professional resumes with AI-powered suggestions, multiple templates, and instant PDF export.

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

# 📸 Screenshots

<div align="center">
<img src="image.png" width="800"/>
<br><br>
<img src="https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Resume+Preview" width="800"/>
</div>

---

# ✨ Features

## 🎯 Core Features

- ✅ User Authentication – Secure JWT-based login/register system
- ✅ Resume Builder – Create and edit resumes with dynamic sections
- ✅ 8 Professional Templates
- ✅ AI-Powered Suggestions
- ✅ Live Preview
- ✅ PDF Export
- ✅ Dark/Light Mode
- ✅ Responsive Design

## 🎨 Premium Design

- ✨ Glassmorphism UI
- 🌈 Animated Gradients
- 🎭 3D Tilt Effects
- 💫 Floating Particles
- 🎪 Smooth Page Transitions

---

# 🛠️ Tech Stack

## Frontend

| Technology | Description |
|------------|-------------|
| React 18 | UI library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router | Routing |
| React Hook Form | Form Validation |
| Axios | HTTP Client |
| HTML2Canvas + jsPDF | PDF Export |
| Heroicons | Icons |

## Backend

| Technology | Description |
|------------|-------------|
| Node.js | Runtime |
| Express.js | REST API |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Bcrypt | Password Hashing |
| OpenAI API | AI Suggestions |

---

# 📁 Project Structure

```text
smart-resume-builder/
│
├── backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── middleware/
│
└── frontend/
    ├── .env
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── src/
```

---

# 🚀 Quick Start

## Prerequisites

- Node.js v16+
- npm or yarn
- MongoDB Atlas
- OpenAI API Key (Optional)

## 1. Clone Repository

```bash
git clone https://github.com/nilesh0509/resumeBuilder.git

cd resumeBuilder
```

## 2. Backend Setup

```bash
cd backend

npm install

cp .env.example .env

npm run dev
```

## 3. Frontend Setup

```bash
cd frontend

npm install

cp .env.example .env

npm run dev
```

## 4. Open Application

```
Frontend : http://localhost:5173
Backend  : http://localhost:5000
```

---

# 🔧 Environment Variables

## Backend

```env
PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/resume_builder

JWT_SECRET=your_jwt_secret_key

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
```

## Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📡 API Documentation

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Current User |

## Resume

| Method | Endpoint |
|---------|----------|
| GET | /api/resumes |
| GET | /api/resumes/:id |
| POST | /api/resumes |
| PUT | /api/resumes/:id |
| DELETE | /api/resumes/:id |

## AI

| Method | Endpoint |
|---------|----------|
| POST | /api/ai/analyze |

---

# 🎨 Templates

| # | Template | Best For |
|---|----------|-----------|
| 1 | Modern | Tech |
| 2 | Minimal | ATS |
| 3 | Creative | Designers |
| 4 | Elegant | Executives |
| 5 | Compact | Experienced Professionals |
| 6 | Executive | Leadership |
| 7 | Tech | Developers |
| 8 | Classic | Traditional Industries |

---

# 🚀 Deployment

## Backend (Render)

```bash
# Push repository

# Create Render Web Service

# Add environment variables

# Deploy
```

## Frontend (Vercel)

```bash
npm install -g vercel

cd frontend

vercel
```

---

# 💡 AI Resume Analysis

- 📊 Resume Score
- ✍️ Grammar Suggestions
- 🔑 ATS Optimization
- 💪 Achievement Recommendations
- 🎯 Missing Keywords
- 📝 Better Project Descriptions

---

# 🌓 Dark / Light Mode

Theme preference is automatically saved in localStorage.

---

# 🤝 Contributing

```bash
git checkout -b feature/AmazingFeature

git commit -m "Add Amazing Feature"

git push origin feature/AmazingFeature
```

Then open a Pull Request.

---

# 📝 License

Licensed under the MIT License.

---

# 🙏 Acknowledgments

- OpenAI
- MongoDB Atlas
- Vercel
- Render
- Tailwind CSS
- Heroicons

---

# 📞 Contact

**GitHub:** @yourusername

**Email:** your.email@example.com

**LinkedIn:** Your Name

---

<div align="center">

⭐ If you found this project helpful, please give it a star!

Made with ❤️ by **Your Name**

</div>