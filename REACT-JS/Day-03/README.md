# React Routing & Frontend-Backend Integration 

This project demonstrates how to use `react-router-dom` for client-side routing and how to connect a React frontend with a Node.js backend.

## 📁 Project Structure
```bash
/client → React frontend
/server → Node.js + Express backend
```

---

## 📦 Tech Stack

- React (Vite)
- React Router DOM v6
- Node.js + Express
- Fetch API (for frontend-backend interaction)
- CORS

---

## 🚀 Setup Instructions

### 1️⃣ Start Backend Server

```bash
cd server
npm install
node index.js
```
| Route    | Component | Description |
| -------- | --------- | ----------- |
| `/`      | Home.jsx  | Home page   |
| `/about` | About.jsx | About page  |

## 📂 Code Overview
###  Backend Code (/server/index.js)
```js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Backend 🚀" })
})

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000')
})
```
###  React Frontend (Vite-based)
App.jsx
```js
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
)

export default App
```
## ✅ Folder Tree Summary
```bash
📦 project-root
├── 📁 client
│   ├── 📁 src
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components
│   │   │   └── Navbar.jsx
│   │   └── pages
│   │       ├── Home.jsx
│   │       └── About.jsx
│   └── ...
├── 📁 server
│   └── index.js
```
## 🧠 Concepts Practiced
- React Router DOM v6: BrowserRouter, Routes, Route
- <Link> for navigation

- useEffect + fetch() to call backend

- CORS setup in Express

- Client-Server architecture

- Folder separation (frontend/backend)