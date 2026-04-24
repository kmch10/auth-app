#  Secure Auth Dashboard

A modern authentication system built with React and Tailwind CSS, featuring login/signup flow, validation, and protected routes.

---

##  Features

*  User authentication (Login & Signup)
*  Protected routes (only accessible after login)
*  Form validation (email format, password rules)
*  Error handling with user feedback
*  Local storage-based session management
*  Navigation between Login & Signup pages
*  Modern UI built with Tailwind CSS

---

##  Tech Stack

* React
* React Router DOM
* Tailwind CSS
* JavaScript (ES6+)

---

##  Preview

*Add screenshots here (login page, signup page, dashboard)*

---

##  How It Works

* User signs up → credentials stored in localStorage
* User logs in → credentials validated
* On success → redirected to dashboard
* Protected routes prevent unauthorized access

---

##  Note

This project simulates authentication on the frontend using localStorage.
In a real-world application, authentication would be handled via a backend using secure APIs and token-based authentication (e.g., JWT).

---

##  Run Locally

```bash
npm install
npm run dev
```

---

##  Future Improvements

* Backend integration (Node.js / Express)
* Password hashing
* Role-based access control
* Persistent sessions

