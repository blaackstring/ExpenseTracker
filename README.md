# 💸 Expense Tracker App

A full-stack Expense Tracker application with **user authentication**, **CRUD operations**, and **data visualization** using **Pie Chart** and **Bar Chart**. Built using a REST API backend and a responsive React frontend.


 🛠️ Tech Stack

### Frontend:
- React.js
- Chart.js (Pie & Bar charts via react-chartjs-2)
- Axios (for API requests)
- Tailwind CSS (for styling)

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing
- CORS, dotenv, body-parser

---

## 🚀 Features

- 🔐 **User Authentication:**
  - Signup and Login using JWT
  - Protected routes for logged-in users only

- 🔁 **CRUD Operations:**
  - Create, Read, Update, Delete expenses & income
  - Transactions stored per user

- 📊 **Data Visualization:**
  - **Pie Chart:** Category-wise expense distribution
  - **Bar Chart:** Monthly income vs expenses

- 📱 **Responsive Design:**
  - Works smoothly on both desktop and mobile

---

## ⚙️ How I Built It

### 🔙 Backend (REST API)

1. **Auth:**
   - `POST /api/auth/register` – Register new user (hashes password)
   - `POST /api/auth/login` – Login with JWT token response
   - Middleware to protect routes using `verifyToken`

2. **Transactions (Protected Routes):**
   - `GET /api/transactions` – Fetch all transactions for logged-in user
   - `POST /api/transactions` – Add new transaction
   - `PUT /api/transactions/:id` – Update existing transaction
   - `DELETE /api/transactions/:id` – Delete transaction

3. **Security:**
   - JWT stored in HTTP headers
   - Passwords hashed using bcrypt

---

### 🌐 Frontend (React)

1. **Authentication:**
   - Login and Signup forms
   - Axios interceptors for setting auth headers
   - Protected routes (e.g., Dashboard)

2. **CRUD Features:**
   - Dynamic form to add/update transactions
   - Delete functionality with confirmation
   - State sync after each operation

3. **Charts:**
   - `react-chartjs-2` to render Pie & Bar charts
   - Realtime chart update after CRUD actions

4. **UX Enhancements:**
   - Success/Error toasts
   - Loading states
   - Clean responsive design with Tailwind

---
