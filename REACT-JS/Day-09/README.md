# 🔐 React Day 9 – Custom Hooks + AuthContext  

---

## 🚀 What You’ll Learn

✅ Create and use `AuthContext`  
✅ Manage global login/logout state  
✅ Use `useContext` to access anywhere  
✅ Create reusable custom hooks like `useAuth()`  
✅ Clean, scalable structure for auth-based apps

---

## 🧠 Why Use AuthContext?

Instead of passing `isLoggedIn` & `setUser` props down multiple components:

🔁 Create a **global context** that all components can use:

- Navbar: show Login/Logout
- Dashboard: protect routes
- Buttons: access user state directly

---

## 🧠 Benefits of Custom Hook (useAuth())

✅ Cleaner syntax

✅ No need to useContext(AuthContext) every time

✅ Easy to refactor and reuse

```jsx
//  Instead of:
const { user } = useContext(AuthContext);

// 🔥 Use:
const { user } = useAuth();
```
