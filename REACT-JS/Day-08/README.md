# React Day 8 – Context API

## What is Context API?

The **Context API** is a built-in React tool used to **share data globally** across components without manually passing props through every level (known as "prop drilling").

---

## 🚀 Why Use Context API?

✅ Avoids prop drilling  
✅ Clean, centralized global state  
✅ Good for themes, user auth, language, cart, etc.  
✅ Easy to scale small/medium apps without Redux

---

## 🧠 How Does It Work?

1. **Create Context** using `createContext()`
2. **Provide Context** to app tree using `Provider`
3. **Consume Context** anywhere using `useContext()`

---

## 🛠 Example – Theme Context

### `ThemeContext.js`

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

## 🧠 Why use Context API?

- Prevents prop drilling hell

- Centralized state management (for small apps)

- Simple alternative to Redux / Zustand for small-to-medium needs

## 📊 Use Cases:

- Auth (login/logout)

- Theme toggler (dark/light)

- Language switcher (i18n)

- Cart & Wishlist

- Global alerts/toasts

## ⚙️ How it works?

- Create Context

- Provide Context (Provider)

- Use Context (Consumer or useContext)
