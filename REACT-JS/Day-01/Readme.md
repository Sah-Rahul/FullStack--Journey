# 📘 React Introduction & Setup  

## 📌 What I Learned Today

### ✅ 1. What is React and Why Use It?

* **React** is a JavaScript library for building user interfaces (mostly single-page applications).
* Developed by Facebook.
* Allows **component-based architecture** – build reusable UI blocks.
* Highly efficient with **virtual DOM** for fast UI updates.
* Easy integration with other libraries/frameworks.

### ✅ 2. Ways to Create a React App

#### 🚀 Using CRA (Create React App)

```bash
npx create-react-app my-app
cd my-app
npm start
```

* Suitable for beginners.
* Comes with pre-configured Webpack, Babel, etc.

#### ⚡ Using Vite (Faster Modern Alternative)

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

* Much faster dev server.
* Lightweight and more modern.

### ✅ 3. Files Explained

#### 📁 package.json

* Contains metadata about your app.
* Tracks dependencies, scripts, version, project name, etc.

#### 📁 package-lock.json

* Automatically generated.
* Locks the versions of dependencies to ensure reproducible builds.

### ✅ 4. HTML vs XML vs XAML

| Feature       | HTML       | XML                      | XAML                     |
| ------------- | ---------- | ------------------------ | ------------------------ |
| Used for      | Web pages  | Data storage & transport | UI in Microsoft tech     |
| Tags          | Predefined | Custom allowed           | Declarative UI structure |
| Syntax strict | No         | Yes                      | Yes                      |
| Closing tags  | Optional   | Mandatory                | Mandatory                |

---

## 🧠 Key Takeaway

> "React lets you build user interfaces by breaking your UI into independent, reusable pieces called components."

---

## ✅ Basic React Code (Vite Example)

```jsx
// App.jsx
function App() {
  return (
    <>
      <h1>Hello React!</h1>
    </>
  );
}

export default App;
```

---

## 🔧 How to Start (Vite)

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```

---

## 📂 Folder Structure

```
my-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── package-lock.json
```

 