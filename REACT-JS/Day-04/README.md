# ⚛️ React State & Icons

This project demonstrates how to use **React State (`useState`)** to manage data inside components, and how to use **Icons** in a React app (using `react-icons` package).

---

## 🧠 Topics Covered

1. What is State in React?
2. Why do we need State?
3. How to use `useState()` hook
4. How to update state with button click
5. How to install and use `react-icons`

---

## 📦 Tech Stack

- React (Vite)
- `useState` hook
- `react-icons` (Feather Icons, Font Awesome, etc.)

---

## 🚀 Setup

```bash
# Frontend Setup
npm create vite@latest react-app
cd react-app
npm install
npm install react-icons
npm run dev
```
## 📂 Folder Structure
```bash
/src
  ├── App.jsx
  ├── Counter.jsx
  ├── LikeButton.jsx
```
## What is State in React?
State is like a component’s memory.
It allows React to "remember" values between renders and react to user interaction.

We use the useState() hook to manage state.
```js
const [count, setCount] = useState(0)
```
- count = current value

- setCount = function to update it

## ⭐ Using Icons in React
- We use the react-icons package, which provides icons from:

- Font Awesome (Fa)

- Feather (Fi)

- Material UI (Md)

- Remix Icon (Ri)

Example

```js
import { FaHeart } from "react-icons/fa"
```
## 📚 Summary

| Feature      | Hook/API Used         |
| ------------ | --------------------- |
| Local state  | `useState()`          |
| Icons        | `react-icons` package |
| Toggle logic | Conditional rendering |
