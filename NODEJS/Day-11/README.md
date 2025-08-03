## 📦 Backend Days 11: Authentication with MongoDB, JWT, and Middleware

### ✅ Topics Covered:
- User model with password hashing (bcrypt)
- Register user with validation
- Login user and generate JWT
- Protect routes with middleware
- Get and update user profile

### 🔐 JWT Auth Workflow:
1. Register → save hashed password
2. Login → compare password, return token
3. Protect → verify token from header
4. Profile → get/update user info securely

---

## API Routes

### Auth Routes
| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | /api/users/register  | Register new user    |
| POST   | /api/users/login     | Login and get token  |
| GET    | /api/users/profile   | Get logged-in user   |
| PUT    | /api/users/profile   | Update user profile  |

---

