# Priyansh Mathur's MERN Authentication System

A secure and robust authentication system built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This project implements user registration, login, and protected routes using JWT-based authentication and password hashing. It demonstrates modern web development practices and serves as a solid foundation for full-stack applications requiring secure user management.

**Live Demo:** [https://mern-auth-priyansh.vercel.app/](https://mern-auth-priyansh.vercel.app/) *(Replace with your actual live link if available)*

---

## 📌 Features

- **User Registration & Login** – Secure endpoints to register and authenticate users.
- **JWT-Based Authentication** – Uses JSON Web Tokens for maintaining sessions and protecting routes.
- **Password Hashing** – Implements bcrypt for secure password storage.
- **Protected Routes** – Ensures that sensitive API routes can only be accessed by authenticated users.
- **Responsive Frontend** – A modern React.js interface for a smooth user experience.
- **Error Handling & Validation** – Provides user-friendly error messages and input validations.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **npm** or **yarn** (Included with Node.js)
- **MongoDB** – Either a local installation or a MongoDB Atlas account for a cloud database

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PriyanshMathur/mern-authentication-system.git
   cd mern-authentication-system

2. **Setup Environment Variables**

   Create a `.env` file in the root of the project (and in the server directory if separated) with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Install Server Dependencies**

   Navigate to the `server` directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

4. **Install Client Dependencies**

   In a separate terminal, navigate to the `client` directory and install dependencies:
   ```bash
   cd client
   npm install

   ```

5. **Run the Development Servers**

   - **Backend:** 
     Start the server by running:
     ```bash
     cd server
     npm run dev

     ```
   - **Frontend:** 
     In another terminal, start the React app:
     ```bash
     cd client
     npm run dev
     
     ```

   The React app will typically run on `http://localhost:3000/` and the backend on `http://localhost:5000/` (or as specified in your `.env` file).

---

## 📁 Project Structure

```plaintext
mern-authentication-system/
├── client/             # React frontend
│   ├── public/         # Static files (index.html, favicon, etc.)
│   ├── src/            # React components, pages, assets, etc.
│   │   ├── components/ # Reusable components (Header, Footer, etc.)
│   │   ├── pages/      # Page components (Home, Login, Register, etc.)
│   │   ├── App.js      # Main App component
│   │   └── index.js    # React entry point
│   ├── package.json   # Client dependencies and scripts
│   └── README.md       # Client documentation (if separate)
│
├── server/             # Node.js + Express backend
│   ├── config/         # Configuration files (e.g., database connection)
│   ├── controllers/    # Request handlers (e.g., auth controller)
│   ├── middleware/     # Custom middleware (e.g., authentication)
│   ├── models/         # Mongoose models (e.g., User model)
│   ├── routes/         # API routes (e.g., auth routes)
│   ├── utils/          # Utility functions
│   ├── server.js       # Entry point for the backend server
│   └── package.json   # Server dependencies and scripts
│
├── .env                 # Environment variables (for development)
├── package.json         # Root-level configuration (if using concurrently)
└── README.md             # Project documentation
```

---

## 🛠️ Technologies Used

- **MongoDB** – NoSQL Database for storing user data.
- **Express.js** – Backend framework for Node.js.
- **React.js** – Frontend library for building interactive user interfaces.
- **Node.js** – JavaScript runtime environment.
- **JWT (JSON Web Tokens)** – For secure authentication and session management.
- **Bcrypt** – For hashing and salting passwords.
- **Axios** – For handling HTTP requests from the frontend (if used).
- **ES6+ JavaScript** – Modern JavaScript syntax and features.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions, bug fixes, or enhancements, feel free to open an issue or submit a pull request:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

---
## 🙌 Built By

**Priyansh Mathur**

- **Portfolio:** https://portfolio-website-priyansh.vercel.app/
```
