# 📅 React Day 3 – Props & Component Reusability

Today I learned how to pass **data** from one component to another using **props**, and how to write **reusable components** for scalable React applications.

---

## 📚 Topics Covered:

### ✅ 1. What are Props?
- "Props" = **properties** passed to components (like function parameters)
- They make components **dynamic and reusable**

```jsx
function Greet(props) {
  return <h2>Hello, {props.name}</h2>;
}
```
## ✅ 2. Reusable Components
Write a component once, use it multiple times with different props.

Example:
```js
<Card title="React" desc="A JS Library" />
<Card title="Node.js" desc="A JS Runtime" />
```
## 🧠 Why This Matters
| Feature            | Benefit                            |
| ------------------ | ---------------------------------- |
| Props              | Share data between components      |
| Reusability        | Write once, use many times         |
| Clean UI Structure | Maintainable and scalable codebase |
