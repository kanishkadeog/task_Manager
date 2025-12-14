# Task Manager – MERN Stack Application

## 📌 Info

A full-stack **Task Manager** application built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Material UI (MUI)**. The application allows users to manage tasks with full CRUD functionality, optional PDF file uploads, deadline-based status tracking, and a clean, responsive UI.

This project was developed as part of a **Full-Stack Take‑Home Assignment** and follows best practices in architecture, code structure, and deployment.

---

## 🔗 Live Demo

* **Frontend (Netlify)**: [https://sparkling-bunny-798f8b.netlify.app/](https://sparkling-bunny-798f8b.netlify.app/)
* **Backend (Render)**: [https://task-manager-xwsr.onrender.com](https://task-manager-xwsr.onrender.com)
* **GitHub Repository**: [https://github.com/kanishkadeog/task_Manager](https://github.com/kanishkadeog/task_Manager)

---

## 📖 Project Summary

The Task Manager application helps users create, track, update, and delete tasks efficiently. Each task can optionally include a **PDF attachment**, has a **deadline**, and dynamically reflects its status based on time and completion state.

The application was built using a **backend‑first approach**, ensuring stable APIs before frontend integration. It is fully deployed with cloud-hosted MongoDB, backend services, and frontend UI.

---

## ✨ Key UX Highlights

* 📋 Tabular task view with clear actions
* ➕ Floating Action Button for adding tasks
* 🪟 Modal-based Add/Edit task flow
* 📎 PDF upload & download support
* ⏳ Automatic task status rendering (In Progress / Achieved / Failed)
* 🔄 Real-time UI updates after CRUD operations
* 📱 Responsive design using MUI components
* ⚠️ Confirmation before deleting tasks

---

## 🛠 Tech Stack

### Frontend

* React (CRA)
* Material UI (MUI)
* Axios
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer (file uploads)
* CORS

### Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas (Cloud)

---

## 🧱 Architecture

The project follows a **layered architecture** for the backend and a **component + hooks based architecture** for the frontend.

### Backend Layers

* Routes → Controllers → Services → Models

### Frontend Layers

* Components (UI)
* Hooks (State & logic)
* Services (API calls)
* Utils (helpers)

---

## 📂 Project Structure

```
taskManager/
├── backend/
│   ├── config/
│   │   └── multerConfig.js
│   ├── controllers/
│   │   └── task.controller.js
│   ├── models/
│   │   └── task.model.js
│   ├── routes/
│   │   └── task.route.js
│   ├── services/
│   │   └── task.service.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── service/
│       ├── utils/
│       ├── App.js
│       ├── index.js
│       └── index.css
│
└── README.md
```

---

## 🚀 Project Features & Pages

### Pages / Views

* Task List View
* Add Task Modal
* Edit Task Modal
* No Tasks Found View

### Features

* Create task with title, description, deadline, and optional PDF
* Read all tasks in a table format
* Update task details
* Mark task as DONE
* Delete task
* Upload & download PDF files
* Deadline-based dynamic task status

---

## 🔌 API Endpoints

| Method | Endpoint   | Description                         |
| ------ | ---------- | ----------------------------------- |
| GET    | /tasks     | Fetch all tasks                     |
| POST   | /tasks     | Create a new task (with PDF upload) |
| PATCH  | /tasks/:id | Update task details or PDF          |
| PATCH  | /tasks/:id | Mark task as DONE                   |
| DELETE | /tasks/:id | Delete a task                       |

---

## 🗄 Database Schema (MongoDB)

```js
Task {
  title: String (required),
  description: String (required),
  status: "TODO" | "DONE" (default: TODO),
  linkedFile: {
    data: Buffer,
    contentType: String
  },
  deadline: Date (required),
  createdAt: Date,
  updatedAt: Date
}
```

---

## ☁️ Deployment Notes

* MongoDB hosted on **MongoDB Atlas**
* Backend deployed on **Render** (root directory: backend)
* Frontend deployed on **Netlify** (directory: frontend)
* Environment variables managed securely
* API base URL updated in frontend after deployment

---

## 🖼 Screenshots

> 📌 Screenshots referenced from the assignment:

* No Data View
* Task Table View
* Add Task Modal
* Edit Task Modal

  <img width="1914" height="876" alt="image" src="https://github.com/user-attachments/assets/fed766e1-e7d0-4630-8146-6ebea0fd70dd" />
<img width="1893" height="869" alt="image" src="https://github.com/user-attachments/assets/ec37c78c-ac03-453e-b257-9cf1e06abacc" />

---

## 🧪 How to Run Locally / Setup & Local Development

### Prerequisites

* Node.js
* Git
* MongoDB (Local or Atlas)
* VS Code

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on `http://localhost:8082`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

---

## 🔮 Future Enhancements

* Authentication (Login / Signup)
* Role-based access control
* Pagination & sorting
* Search & filter tasks
* File preview before download
* Task priority levels
* Email reminders for deadlines
* Drag & drop task reordering

---

## 👨‍💻 Author

**Kanishka Deogade**
MERN Stack Developer

---

⭐ If you like this project, consider giving it a star on GitHub!
