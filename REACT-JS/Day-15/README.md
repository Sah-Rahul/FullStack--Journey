# 📅 Day 15: Custom Hooks in React – Reusable Logic (`useFetch`)

## 🔍 Goal
Understand how to:
- Create custom hooks (`useFetch`)
- Reuse logic across components
- Improve code readability and separation of concerns

---

## 🧠 Why Custom Hooks?

React custom hooks allow you to:

✅ Reuse logic  
✅ Keep components clean  
✅ Follow DRY principle (Don't Repeat Yourself)
---

## 💡 Tips for Better Hooks
| Tip                       | Description                  |
| ------------------------- | ---------------------------- |
| Always prefix with `use`  | So React knows it's a hook   |
| Avoid placing in loops    | Hooks must stay on top level |
| Return only what’s needed | `data`, `loading`, `error`   |
## Summary
| Feature          | Traditional Way   | With Custom Hook |
| ---------------- | ----------------- | ---------------- |
| Code Reuse       | ❌ Duplicate logic | ✅ Clean, DRY     |
| Component Clean  | ❌ Messy           | ✅ Focused        |
| Easy to Maintain | ❌ Harder          | ✅ Modular        |
