#  Day 13: Controlled vs Uncontrolled Components in React

## 🎯 What is the Difference?

| Type               | Controlled                         | Uncontrolled                    |
|--------------------|-------------------------------------|----------------------------------|
| Form data stored in | React `state`                      | DOM (`ref`)                     |
| Updates UI on input | ✅ Yes (via setState)               | ❌ No automatic updates         |
| Validation         | Easy to validate in real-time      | Harder to track input           |
| Usage              | Recommended for most use-cases     | Useful for quick form grabs     |

---

## 🤖 Controlled Component

Form input value is controlled by React via `useState`.

```jsx
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />
```
✅ Updates React state on every keystroke

✅ Great for validation, conditional rendering, etc.
## Uncontrolled Component
- Form input value is uncontrolled and accessed via useRef.
```jsx
const nameRef = useRef();

<input ref={nameRef} />
```
❌ React doesn't know current value

✅ Useful when you just want to grab values on submit
## When to Use Which?
| Controlled                         | Uncontrolled                  |
| ---------------------------------- | ----------------------------- |
| Dynamic forms                      | Simple or 3rd-party libraries |
| Real-time validation or formatting | Quick dirty forms             |
| Dependent fields                   | File uploads                  |
## 📚 Summary
| Feature           | Controlled    | Uncontrolled      |
| ----------------- | ------------- | ----------------- |
| React State       | ✅ Yes         | ❌ No              |
| Real-time control | ✅ Easy        | ❌ Manual          |
| Validation        | ✅ Easy        | ❌ Harder          |
| Clean/Scalable    | ✅ Recommended | ⚠️ For edge cases |
