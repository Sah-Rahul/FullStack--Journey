## Day 8 & 9 – MongoDB Integration + Product Model & Routes

### ✅ What You Built
- Connected MongoDB with Node.js backend

- Created Product Model using Mongoose

- Defined CRUD Routes for:

- POST /products → Create a new product

- GET /products → Get all products

```bash
src/
│
├── config/
│   └── db.js               # MongoDB connection setup
│
├── controllers/
│   └── product.controller.js  # Product logic (create, getAll)
│
├── models/
│   └── product.model.js    # Mongoose schema for products
│
├── routes/
│   └── product.routes.js   # API endpoints
│
├── index.js                # App entry point
├── .env                    # Environment variables
```