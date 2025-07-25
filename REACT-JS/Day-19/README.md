# 🚀 Day 19: Redux Toolkit + AsyncThunk with API Integration

Learn how to fetch data from an API using `Redux Toolkit` and `createAsyncThunk`. This project shows how to handle loading, success, and error states cleanly in a real-world React app.

---

## 📦 Tech Stack

- React
- Redux Toolkit
- Axios
- Tailwind CSS
- JSONPlaceholder API

---

## 📁 Folder Structure

```bash
src/
├── app/
│ └── store.js
├── features/
│ └── posts/
│ └── postsSlice.js
├── pages/
│ └── Posts.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🧠 How It Works

- createAsyncThunk() makes async API calls

- extraReducers tracks lifecycle: pending, fulfilled, rejected

- Redux state manages loading, error, and data

- UI responds to global state using useSelector

## 📂 Sample Code

### 🧵 Async Thunk

```js
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});
```

### 🧠 State Flow

```js
extraReducers: (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};
```

## Output

- ✅ Posts list displayed

- ⏳ Shows loading message

- ❌ Shows error message if failed
