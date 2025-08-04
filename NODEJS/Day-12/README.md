## A complete backend setup for a MERN app with user authentication, product CRUD, validations, and protected routes.

### 🔧 Tech Stack

- Node.js

- Express.js

- MongoDB + Mongoose

- JWT (Auth)

- bcryptjs (Password hashing)

- dotenv

- CORS & body-parser

### 🔐 User Features

- ✅ Register new user

- ✅ Login with email & password

- ✅ Hash passwords using bcrypt

- ✅ JWT token generation

- ✅ Protect routes via middleware

### 📦 Product Features

- ✅ Create a new product (POST /api/products)

- ✅ Get all products (GET /api/products)

- ✅ Get product by ID (GET /api/products/:id)

- ✅ Update product (PUT /api/products/:id)

- ✅ Partial Update product (PATCH /api/products/:id)

- ✅ Delete product (DELETE /api/products/:id)

- ✅ Input validation using Mongoose

- ✅ Error types: 400 (Bad Request), 404 (Not Found), 500 (Server Error)

### 🧪 Sample API Endpoints

Auth

```bash
POST    /api/auth/register
POST    /api/auth/login
```

Products

```bash
POST    /api/products             # Protected
GET     /api/products
GET     /api/products/:id
PUT     /api/products/:id         # Protected
PATCH   /api/products/:id         # Protected
DELETE  /api/products/:id         # Protected
```

### 📂 Folder Structure

```bash
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── product.controller.js # Product logic
│   └── user.controller.js    # Auth logic
├── middleware/
│   └── auth.middleware.js    # Protect routes using JWT
├── models/
│   ├── product.model.js      # Product schema
│   └── user.model.js         # User schema
├── routes/
│   ├── product.routes.js     # Product routes
│   └── user.routes.js        # Auth routes
├── .env                      # Environment variables
├── index.js                  # Server entry point
├── package.json
```
