# 📅 React Day 2 – Components & Routing in React

Today, I explored two key concepts in React that are the backbone of building multi-page and reusable UI apps.

---

## 📚 Topics Covered:

### ✅ 1. React Components

- **Functional Components** (Modern, Hooks-friendly)
- Components help in **reusability**, **clean structure**, and **separation of concerns**.

```jsx
function Header() {
  return <h2>This is the Header Component</h2>;
}
```

## ✅ 2. React Router (v6+)

- Helps build single-page apps with multiple "views" using:

- BrowserRouter

- Routes

- Route

- Link (client-side navigation)

## 🧠 Project Structure

```bash
src/
┣ App.jsx
┣ main.jsx
┣ components/
┃ ┣ Header.jsx
┃ ┗ Footer.jsx
┣ pages/
┃ ┣ Home.jsx
┃ ┗ About.jsx
```

### Installation:

```bash
npm install react-router-dom
```
## Summary

| Topic      | Key Learnings                           |
| ---------- | --------------------------------------- |
| Components | UI is split into independent pieces     |
| Routing    | Enables navigation without page reloads |
