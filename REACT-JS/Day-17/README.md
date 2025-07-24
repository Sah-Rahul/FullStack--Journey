# 🔐 Day 19 – React Router Advanced + Protected Routes

React Router enables navigation between views. Today’s focus is:

✅ Nested Routes  
✅ Dynamic Routes  
✅ Protected Routes (authentication-based)  
✅ `useNavigate`, `useParams`, and `Outlet`  
✅ Redirecting if not logged in

---

## ⚙️ Install React Router

```bash
npm install react-router-dom
```

## 📂 Folder Structure

```bash
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Login.jsx
├── components/
│   └── ProtectedRoute.jsx
```

## 🧠 Key Concepts

| Feature                      | Description                            |
| ---------------------------- | -------------------------------------- |
| `<Routes><Route /></Routes>` | Define routes                          |
| `<Outlet />`                 | Placeholder for nested route rendering |
| `useNavigate()`              | Navigate programmatically              |
| `useParams()`                | Get dynamic route parameters           |
| `Navigate`                   | Redirects the user                     |
| ProtectedRoute               | Custom wrapper to allow/deny access    |
## 🎯 Summary
- Outlet = renders child routes

- Navigate = programmatic redirect

- ProtectedRoute = guard logic

- useParams() = access route variables

- Store token in localStorage or context