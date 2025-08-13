# Day-14 🔐 Backend – Email Service Integration (OTP & Password Reset)

This backend implements **Email Verification** and **Password Reset Flow** using **Node.js, Express, MongoDB, and Nodemailer**.

---

## 📌 Features

- User registration with OTP-based **email verification**
- Forgot password & **password reset flow**
- OTP tokens auto-expire in 1 hour
- Secure password hashing with **bcrypt**
- Works with frontend links for verification and reset

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- Nodemailer
- bcryptjs
- crypto
- dotenv

---

## 🔐 API Endpoints
Auth
- POST /api/auth/register – Register user & send verification email

- GET /api/auth/verify/:userId/:token – Verify email via OTP

- POST /api/auth/forgot-password – Send reset password email

- POST /api/auth/reset-password/:userId/:token – Reset password