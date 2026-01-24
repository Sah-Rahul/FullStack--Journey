# ⚡ Advanced React & Next.js Performance Guide

# 🚀 PART 1: Pure React Performance Mini‑Project

## 🔥 Project: High‑Performance Product Dashboard

### 🎯 Goal

Render **10k+ products** smoothly with minimal re‑renders.

---

## 🧠 Architecture Decisions

* Component-level memoization
* Stable references for props
* Derived state memoization
* Controlled re-render boundaries

---

## 📂 Folder Structure

```
src/
 ├─ components/
 │   ├─ ProductList.jsx
 │   ├─ ProductCard.jsx
 │   └─ Filters.jsx
 ├─ hooks/
 │   └─ useProducts.js
 └─ App.jsx
```

---

## ✅ ProductCard (Memoized)

```jsx
import React from "react";

const ProductCard = React.memo(({ product, onAdd }) => {
  console.log("Product render", product.id);
  return (
    <div>
      <h4>{product.name}</h4>
      <button onClick={() => onAdd(product.id)}>Add</button>
    </div>
  );
});

export default ProductCard;
```

---

## ✅ useProducts (Custom Hook)

```jsx
import { useMemo } from "react";

export function useProducts(products, query) {
  return useMemo(() => {
    console.log("Filtering products");
    return products.filter(p => p.name.includes(query));
  }, [products, query]);
}
```

---

## ✅ ProductList (useCallback + useMemo)

```jsx
import { useCallback } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function ProductList({ products, query }) {
  const filtered = useProducts(products, query);

  const handleAdd = useCallback((id) => {
    console.log("Add product", id);
  }, []);

  return filtered.map(p => (
    <ProductCard key={p.id} product={p} onAdd={handleAdd} />
  ));
}

export default ProductList;
```

---

## 🧠 Why This Is Fast

* `ProductCard` renders only when product changes
* `handleAdd` reference stable
* Filter logic runs only when needed

---

# 🎯 PART 2: React Optimization – Interview Q&A (ADVANCED)

### Q1. Why is React slow in large apps?

**Answer:** Excessive re-renders, unstable props, expensive computations, and large component trees.

---

### Q2. Difference between useMemo & useCallback?

* useMemo → memoizes **value**
* useCallback → memoizes **function reference**

---

### Q3. Why React.memo sometimes fails?

Because it uses **shallow comparison**. Objects & functions change by reference.

---

### Q4. Is optimization always good?

No. Over-optimization increases memory usage and complexity.

---

### Q5. How to detect performance issues?

* React DevTools Profiler
* Chrome Performance tab

---

# ⚡ PART 3: Next.js Performance (ADVANCED)

---

## 🧠 Rendering Types (Very Important)

| Type | Runs Where | Use Case         |
| ---- | ---------- | ---------------- |
| CSR  | Browser    | Dashboards       |
| SSR  | Server     | SEO pages        |
| SSG  | Build time | Blogs            |
| ISR  | Hybrid     | Product pages    |
| RSC  | Server     | Reduce JS bundle |

---

## 🚀 Server Components (RSC)

```jsx
// app/products/page.tsx
export default async function ProductsPage() {
  const data = await fetch("https://api/products").then(r => r.json());
  return <ProductList products={data} />;
}
```

✔️ No JS sent to browser
✔️ Faster load

---

## ⚡ Client Component Boundary

```jsx
"use client";

export default function Button() {
  return <button>Click</button>;
}
```

📌 Only interactive parts go client-side.

---

## 🧠 Next.js Middleware (VERY IMPORTANT)

### ❓ What is Middleware?

Runs **before request reaches route** (Edge runtime).

---

### ❌ Not same as Express middleware

| Express        | Next.js Middleware |
| -------------- | ------------------ |
| Runs on server | Runs on edge       |
| After request  | Before route       |
| Heavy logic    | Lightweight only   |

---

## ✅ Example: Auth Middleware

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
```

✔️ Route-level protection
✔️ Runs globally

---

## ⚡ Next.js Optimization Checklist

* Use RSC by default
* Move logic to server
* Use `next/image`
* Use `next/font`
* Lazy load client components
* Cache fetch requests

---

## 🎯 Interview Gold Lines (Next.js)

* Server Components reduce bundle size
* Middleware runs on edge, not Node
* SSR improves TTFB & SEO
* Client components only when needed

---

# 🏁 FINAL SUMMARY

* React optimization = reduce re-renders
* Memoization is a tool, not default
* Next.js performance is about **server-first thinking**
* Middleware is for **routing decisions**, not business logic

---

⭐ This guide alone is enough to clear **React + Next.js performance interviews**.
