# React Day 2 – Components & Routing

Today, I explored the core building blocks of any React app – **Components** – and how to navigate between pages using **React Router**.

---

## What I Learned

### 🔹 1. Components in React

React components are reusable pieces of UI that help build complex user interfaces.

#### ✅ Two Types:

- **Functional Components** (Modern & Preferred)
- **Class Components** (Legacy)

#### ➕ Example:

```jsx
// Functional Component
function Header() {
  return <h1>Welcome to My App</h1>;
}
```
// Usage
<Welcome name="Rahul" />;


## 🚦 React Router DOM (v6+)

Routing lets you switch between different pages or views in your app.

### ✅ Setup:

Install router:

```
npm install react-router-dom
```

### ✅ Basic Routing:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```
