# 📅 Day 14: API Handling in React – `fetch`, `axios`, loading, error, reusable patterns

## 🔍 Goal
Learn how to:
- Fetch data from APIs using `fetch()` and `axios`
- Show loading & error states
- Create reusable fetch logic (custom hook preview)

 
## 🛠️ 3. API Handling Best Practices
| ✅ Do This                      | ❌ Avoid This                 |
| ------------------------------ | ---------------------------- |
| Always show loading UI         | Freezing UI on network delay |
| Use `try/catch` with async     | No error handling            |
| Use `.finally` to stop loading | Relying only on `.then()`    |
| Reuse logic with custom hook   | Duplicate fetch logic        |
## 📌 Summary
| Feature     | `fetch()`                  | `axios`                  |
| ----------- | -------------------------- | ------------------------ |
| Built-in    | ✅ Yes                      | ❌ Needs installation     |
| Syntax      | Verbose (needs more lines) | Clean & readable         |
| Auto JSON   | ❌ Manual `.json()`         | ✅ Automatic JSON parsing |
| Error Catch | ❌ Manual status check      | ✅ Catches HTTP errors    |
