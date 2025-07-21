# 📅 React Day 7 – Props, Reusable Components & Props Drilling

Today I dived into how React shares data between components using **Props** and how to create **Reusable Components** to avoid repetition. I also learned about **Props Drilling** – when data has to be passed through multiple layers.

---

## ✅ Topics Covered

### 1. Props (Properties)
- Props are like function arguments – passed from **parent to child**
- Child receives them as parameters (via `props` object)

```jsx
function Greet(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```
## 2. Reusable Components
- Write one generic component, use it many times with different data
```jsx
<Card title="React" desc="JavaScript Library" />
<Card title="Node" desc="Backend JS Runtime" />
```
## 3. Props Drilling
- Passing props through multiple nested components (can become messy)

- Example: App → Parent → Child → SubChild
## 🧠 Key Learnings
| Concept        | Description                                  |
| -------------- | -------------------------------------------- |
| Props          | Pass data from parent to child               |
| Reusability    | One component used multiple times with props |
| Props Drilling | Passing props through multiple nested layers |
