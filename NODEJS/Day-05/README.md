# 🚀 Day 5 – Routes + Controllers + Dummy Product Data

## 📚 Topics Covered

- ✅ Route setup using Express Router  
- ✅ Controller functions to handle logic separately  
- ✅ Creating dummy product data  
- ✅ Handling dynamic route parameters  
- ✅ Sending JSON responses  
- ✅ RESTful API: `GET /api/products` & `GET /api/products/:id`  
- ✅ Clean project folder structure

---

## 📁 Folder Structure

```bash
project/
│
├── controllers/
│ └── productController.js # Handles logic for products
│
├── routes/
│ └── productRoutes.js # API routes for products
│
├── data/
│ └── products.js # Dummy product data
│
├── middleware/
│ └── notFound.js # Error handler (optional)
│
├── index.js # App entry point
├── package.json
```


---

## 🔗 API Endpoints

| Method | Route                | Description               |
|--------|----------------------|---------------------------|
| GET    | `/api/products`      | Fetch all products        |
| GET    | `/api/products/:id`  | Fetch product by ID       |

---

## 📌 Example Responses

### ✅ GET `/api/products`
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Product 1",
      "price": 99.99
    },
  ]
}
```

###  GET /api/products/1
```js
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Product 1",
    "price": 99.99
  }
}
```
## 🚀 How It Works
- Express route /api/products triggers the getAllProducts controller.

- Controller responds with all products from data/products.js.

- Route /api/products/:id uses getProductById controller to fetch one product.

- Everything is modular and clean for easy scaling.