# Day 4: Update, Delete, and Error Handling in Node.js

## 🧠 Topics Covered

- Update user using PUT method
- Delete user using DELETE method
- Custom error middleware
- Organized controllers, routes, and middleware
- Dummy in-memory data for testing

## 📁 Folder Structure

```bash
src/
├── controllers/       # Logic for handling requests
│   └── productController.js
├── routes/            # Route definitions
│   └── productRoutes.js
├── middleware/        # Custom middleware like error handlers
│   └── notFound.js
├── data/              # Dummy database (e.g., products)
│   └── products.js
├── index.js           # App entry point
```
## 🧠 Concepts
- ✅ Controller: Logic layer → makes the code reusable.

- ✅ Router: Defines endpoints cleanly → /api/products

- ✅ Dummy DB: Mimics real database data for testing.

## 📮 Test Endpoints

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

## 🔧 Tools Used

- Express.js
- Postman
- JavaScript (No DB yet)

## ⚙️ Run the Project

```bash
npm install
npm run dev
```