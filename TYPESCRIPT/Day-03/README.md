# 📅 Day 3 – TypeScript: Type vs Interface, Function Types

## 🔹 Type Aliases

- Use `type` to define custom types.
- Supports union, intersection, and primitives.

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};
```

## 🔹 Interfaces

- Use interface to define object shapes.

- Supports extension & merging.

```ts
interface Product {
  title: string;
  price: number;
  readonly id: string;
}
```

## 🔹 Type vs Interface

| Feature             | Type | Interface |
| ------------------- | ---- | --------- |
| Extends another     | ✅   | ✅        |
| Implements class    | ✅   | ✅        |
| Union/Intersection  | ✅   | ❌        |
| Declaration merging | ❌   | ✅        |

### 🔹 Function Types

```ts
type Greet = (name: string) => string;
```

### 🔹 Optional & Readonly

- Optional with ?

- Readonly prevents reassignment

### 🔹 Inheritance / Extension

```ts
type Dog = Animal & { breed: string };
interface Employee extends Person {
  role: string;
}
```
