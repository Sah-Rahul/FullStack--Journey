# 📝 React Forms, map() UI Building, Styling & Form Values

This project demonstrates key React concepts:

- Controlled form handling (input fields)
- Capturing and managing form values using `useState`
- Creating UI using `.map()` function
- Styling with inline CSS and external classes

---

## 📦 Tech Stack

- React (Vite)
- JSX + CSS
- `useState` hook

---

## 🚀 Setup Instructions

```bash
npm create vite@latest react-forms-map
cd react-forms-map
npm install
npm run dev
```

## 🧠 Key Concepts

### ✅ 1. Controlled Form in React

- Input fields controlled via useState

- Value comes from React state

- On change, update the state

```jsx
const [name, setName] = useState("")
<input value={name} onChange={(e) => setName(e.target.value)} />
```
## ✅ 2. Building UI with map()
- Create an array of user data

- Loop through with .map() and display each using a component
```jsx
users.map(user => <UserCard key={user.id} data={user} />)
```
## ✅ 3. Styling React Components
- Inline styles: style={{ color: "red" }}

- Class styles via App.css

- Reusable classNames

## ✅ Output
- Add users through form

- Display all users dynamically using .map()

- Live updates with state

- Styled card layout

## Summary
| Feature        | React Concept                  |
| -------------- | ------------------------------ |
| Form Inputs    | `useState` & Controlled inputs |
| List rendering | `map()`                        |
| UI Styling     | Inline + External CSS          |
| Input handling | `onChange`, `onSubmit`         |
