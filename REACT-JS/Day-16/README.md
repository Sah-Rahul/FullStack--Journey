# 📅 Day 16 – React Query (TanStack) 
## 🔥 Why React Query?

React Query (now called **TanStack Query**) is a powerful library that handles:

✅ Data Fetching  
✅ Caching  
✅ Background Refetching  
✅ Pagination & Infinite Scroll  
✅ Optimistic Updates  
✅ Devtools for debugging

Instead of manually managing loading, error, and state logic with `useState` and `useEffect`, **React Query simplifies everything**.

---

## ⚙️ Installation

```bash
npm install @tanstack/react-query
```
## 🧠 Core Concepts
| Concept               | Description                   |
| --------------------- | ----------------------------- |
| `useQuery`            | Fetch data                    |
| `useMutation`         | Modify data (POST/PUT/DELETE) |
| `QueryClient`         | Manages all queries           |
| `QueryClientProvider` | Wraps your app for context    |
| `invalidateQueries`   | Refetch data after mutation   |

## ✅ Benefits
- No need for useEffect + useState combo

- Built-in caching

- Refetching on window focus

- Easy to scale in real-world apps

## 📌 Real-World Use Cases
- User profile fetching

- Product list

- Infinite scroll job listings

- Auto-refetching dashboards

- POST/PUT with optimistic UI
## 🧠 Core Concepts
| Concept               | Description                   |
| --------------------- | ----------------------------- |
| `useQuery`            | Fetch data                    |
| `useMutation`         | Modify data (POST/PUT/DELETE) |
| `QueryClient`         | Manages all queries           |
| `QueryClientProvider` | Wraps your app for context    |
| `invalidateQueries`   | Refetch data after mutation   |
