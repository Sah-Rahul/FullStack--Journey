# TypeScript – Day 1: Basics, Types & Inference

## ✅ What is TypeScript?

TypeScript is a superset of JavaScript that adds **static type checking**. It helps you:

- Catch errors at compile time
- Improve editor support with autocompletion
- Write scalable and maintainable code

## 🧠 TypeScript vs JavaScript

| JavaScript                | TypeScript               |
| ------------------------- | ------------------------ |
| Dynamically typed         | Statically typed         |
| Errors at runtime         | Errors at compile-time   |
| No intellisense for types | Full type autocompletion |

---

## 🔡 Basic Types

```ts
let username: string = "Rahul";
let age: number = 25;
let isLoggedIn: boolean = true;
let anything: any = "Can be anything";
```

## 🧠 Type Inference

If you assign a value, TS guesses the type.

```ts
let city = "Kathmandu"; // TypeScript infers: string
```
### 🔁 Arrays

```ts
let scores: number[] = [90, 85, 78];
let fruits: string[] = ["apple", "banana"];
```
###  Tuples
Fixed length + fixed types


```ts
let user: [string, number] = ["Rahul", 21];
```
### Enums
```ts
enum Color {
  Red,
  Green,
  Blue,
}
let bgColor: Color = Color.Green;
```
### Type Aliases
```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
};
let u1: User = { name: "Rahul", age: 23 };
```
## 📌 Summary
| Concept         | Syntax Example                    |
| --------------- | --------------------------------- |
| Type annotation | `let name: string = "Rahul";`     |
| Inference       | `let city = "Delhi";`             |
| Array           | `let nums: number[] = [1, 2, 3];` |
| Tuple           | `let tuple: [string, number]`     |
| Enum            | `enum Direction { N, S, E, W }`   |
| Alias           | `type User = { name: string; }`   |
