# 🚀 Day 7 - CRUD API with MongoDB + Mongoose

## 📚 What I Learned
- Built complete CRUD API for products:
  - ✅ Get all products
  - ➕ Add new product
  - ✏️ Update product
  - ❌ Delete product
- Used Express router and controllers
- Handled edge cases (product not found)

## 🧪 Endpoints
| Method | Route               | Action            |
|--------|---------------------|-------------------|
| GET    | /api/products       | Get all products  |
| POST   | /api/products       | Add product       |
| PUT    | /api/products/:id   | Update product    |
| DELETE | /api/products/:id   | Delete product    |

## ✅ How to Test
- Use **Postman** or **Thunder Client**
- Make sure your MongoDB is running

## 📁 Folder Structure
```bash
controllers/ → logic of API
routes/ → API routes
models/ → mongoose schemas
config/ → DB connection
index.js → app entry
```