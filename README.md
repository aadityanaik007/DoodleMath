# 🧮DoodleMath - Handwritten Math Solver
![Image url](https://github.com/user-attachments/assets/830ea495-5f6a-4b0d-b9ee-6589b58a546e)

MathAI is a full-stack web application that allows users to draw math equations on a canvas and uses Google's Gemini API to interpret and solve them. It consists of a Vite + React frontend and a Python-based backend, all containerized with Docker Compose.

---

## 🚀 Features

- ✍️ Draw math expressions on a canvas
- 🤖 Solve equations using Gemini AI (Google's LLM)
- 📷 OCR support to understand handwriting
- 📄 Real-time LaTeX rendering using MathJax
- 🐳 Docker Compose setup for full-stack deployment

---

## 📁 Project Structure

```
MathAI/
├── backend/            # Python backend
├── frontend/           # React + Vite frontend
├── docker-compose.yml  # Docker services
└── README.md
```

---

## ⚙️ Prerequisites

- Docker
- Docker Compose
- A free Gemini API key (from Google)

---

## 🔑 Get a Gemini API Key

1. Go to [https://makersuite.google.com/app](https://makersuite.google.com/app)
2. Sign in with your Google account
3. Click on your profile → **Get API Key** or visit [https://ai.google.dev](https://ai.google.dev)
4. Copy your key

---

## 🧪 Setup Environment Variables

### `backend/.env`

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### `frontend/.env`

```
VITE_API_URL=http://localhost:8000 # Change this if required
```

---

## 🐳 Running the App

From the root of the project:

```bash
docker-compose up --build
```

### URLs:

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

---

## 🧠 How It Works

1. You draw an equation on the canvas in the frontend.
2. The canvas image is sent to the backend.
3. The backend extracts the math expression (via OCR) and sends it to Gemini AI.
4. The result is sent back and rendered in LaTeX in the browser.

---

## 📦 Build Frontend for Production

If you want to serve the frontend statically:

```bash
cd frontend
npm run build
npm run preview
```

## 🧾 License

MIT © 2025 Your Name

**Output Demo**

![Image url](https://github.com/user-attachments/assets/0122825a-41bb-4632-b18e-75adadfc1e2d)
![Image url](https://github.com/user-attachments/assets/f14f3e41-a74c-447f-8e4f-1d7c5a48ea11)
