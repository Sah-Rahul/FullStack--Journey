# Day 21 – Code Splitting + Lazy Loading + Suspense in React 🚀

## 📌 What is Code Splitting?
Code splitting is a technique to break your React app into smaller bundles (chunks), so users download only what they need when they need it – improving performance.

React apps grow large fast. Instead of shipping everything at once, **load components or pages only when needed (on-demand)**.

---

## ⚡ Lazy Loading in React

React provides `React.lazy()` to dynamically import components:

```js
const About = React.lazy(() => import('./pages/About'));
```
## 🌀 <Suspense> – For Fallback UI
Use <Suspense> to show a loading spinner or message while a lazy component is loading.
```jsx
<Suspense fallback={<div>Loading...</div>}>
  <About />
</Suspense>
```
## 🧠 When to Use Code Splitting?
- Big routes/pages (Dashboard, Profile, About)

- Components used rarely (Settings, Modals)

- 3rd-party-heavy components
## 📁 Folder Structure
```bash
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx       ← Lazy Loaded
│   ├── Dashboard.jsx   ← Lazy Loaded
│   └── NotFound.jsx
```