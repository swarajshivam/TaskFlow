# 🚀 TaskFlow

TaskFlow is a modern full-stack task management application built with the MERN stack. It helps users organize, track, and manage their tasks through a clean and responsive interface with secure authentication.

## 🌐 Live Demo

- **Frontend:** https://task-flow-lemon-omega.vercel.app
- **Backend API:** https://taskflow-api-6mv3.onrender.com

---

## ✨ Features

- 🔐 JWT Authentication (Register & Login)
- 📋 Create, Update and Delete Tasks
- 📊 Dashboard with Task Statistics
- 🌙 Dark / Light Theme
- 📱 Fully Responsive UI
- 🔒 Protected Routes
- ⚡ Fast API with Express & MongoDB
- 🎨 Modern UI built with Tailwind CSS
- 🔔 Toast Notifications
- ✅ Form Validation

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- CORS

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```text
TaskFlow/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`server/.env`)

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run Locally

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

> Add screenshots here after deployment.

### Landing Page

<!-- Add screenshot -->

### Dashboard

<!-- Add screenshot -->

### Login

<!-- Add screenshot -->

### Register

<!-- Add screenshot -->

---

## 📈 Future Improvements

- Drag-and-drop Kanban board
- Due dates
- Task priorities
- Labels & categories
- Search & filtering
- User profile page
- Email verification
- Password reset
- Analytics dashboard

---

## 👨‍💻 Author

**Shivam Swaraj**

- GitHub: https://github.com/<your-github-username>
- LinkedIn: <your-linkedin-url>

---

## 📄 License

This project is licensed under the MIT License.