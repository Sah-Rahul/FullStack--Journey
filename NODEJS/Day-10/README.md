## Day-10 Product Routes (GET/PUT/PATCH/DELETE + Validations)

### ✅ Features Implemented:
- GET /api/products/:id → Get single product

- PUT /api/products/:id → Update full product

- PATCH /api/products/:id → Update partial product

- DELETE /api/products/:id → Delete product

- Mongoose validation on name, price

Error handling for:

- 400 Bad Request: invalid input

- 404 Not Found: product missing

- 500 Server Error: internal issues

### Routes (product.routes.js)

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products/:id` | Get product by ID    |
| PUT    | `/api/products/:id` | Replace product      |
| PATCH  | `/api/products/:id` | Update product field |
| DELETE | `/api/products/:id` | Remove product       |

### 🛠 Error Types
- 400 - Bad Request (e.g., validation fails)

- 404 - Not Found (e.g., invalid ID)

- 500 - Server Error (e.g., DB crash)