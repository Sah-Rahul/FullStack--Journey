# 📅 React Day 4 – useState Hook & Interactive UI

Today I learned how to make React apps interactive using the **`useState` hook**. This allows components to "remember" and update data when users interact with them.

---

## 📚 Topics Covered:

### ✅ 1. What is `useState`?

- `useState()` is a React hook used for **state management**.
- It stores dynamic data in a component.
- Re-render happens when state changes.

```jsx
const [count, setCount] = useState(0);
```
## ✅ 2. Why use useState?
| Feature      | Purpose                                  |
| ------------ | ---------------------------------------- |
| Dynamic UI   | Reacts to user actions (click, input...) |
| Re-rendering | UI updates automatically on state change |
## 🧠 What I Learned
- ```useState()``` allows data to change over time.

- State is isolated per component.

Never modify state directly — always use setter like `setCount().`
## 🔥 Key Points
| Hook       | Purpose                              |
| ---------- | ------------------------------------ |
| `useState` | For storing dynamic variables        |
| `setState` | Used to update and trigger re-render |
