# 📅 React Day 6 – Forms, UI Mapping & Styling

Today I practiced three essential building blocks in React:

1. 📝 Controlled Forms
2. 🗂️ Mapping Data to UI with `.map()`
3. 🎨 Styling React Components

---

## ✅ Topics Covered

### 1. Form Handling in React

- Controlled inputs using `useState`
- Input value is always synced with state
- `onChange` updates state on typing

```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />
```
## 2. Mapping UI with .map()
- Rendering list items dynamically

- Each element needs a unique key
```jsx
users.map((user, index) => (
  <p key={index}>{user}</p>
))
```
## 3. Styling Components
- Inline styles (style={{}})

- CSS Modules or global CSS

- Tailwind or external UI libraries
## 🔍 What I Practiced
| Concept          | Description                         |
| ---------------- | ----------------------------------- |
| Controlled Input | Form input managed with `useState`  |
| Form Submit      | Prevent default, add data to list   |
| Mapping UI       | `.map()` through array to render UI |
| Styling          | Basic inline styles for layout      |
