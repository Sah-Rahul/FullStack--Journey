# TypeScript – Day 2: Functions, Unions, Narrowing, Literals

---

## 🔧 Function Types

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

function log(message: string): void {
  console.log(message);
}
```
## ❓ Optional & Default Parameters
```ts
function sum(a: number, b: number = 10): number {
  return a + b;
}

function greetUser(name?: string): string {
  return name ? `Hi ${name}` : "Hi guest";
}
```
## Union Types (|)
```ts
let value: number | string;
value = 10;
value = "ten";
```
## Intersection Types (&)
```ts
type Employee = { empId: number };
type Person = { name: string };
type FullInfo = Employee & Person;

const info: FullInfo = { empId: 1, name: "Rahul" };
```
##  Literal Types
```ts
let direction: "left" | "right" | "center";
direction = "left";
```
# 🔍 Type Narrowing
### 1. typeof check
```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```
### 2. in keyword
```ts
type Admin = { role: string };
type User = { name: string };

function identify(person: Admin | User) {
  if ("role" in person) {
    console.log("Admin");
  } else {
    console.log("User");
  }
}
```
### 3. instanceof
```ts
function printDate(d: Date | string) {
  if (d instanceof Date) {
    console.log(d.getFullYear());
  } else {
    console.log(new Date(d).toDateString());
  }
}
```
### ❌ never & void
- void: no return value

- never: function never returns
```ts
function warn(msg: string): void {
  console.log("Warning:", msg);
}

function throwError(): never {
  throw new Error("Crash!");
}
```
## 🧠 Summary Table
| Concept        | Example                                |           |
| -------------- | -------------------------------------- | --------- |
| Function Type  | `function greet(name: string): string` |           |
| Union          | \`number                               | string\`  |
| Intersection   | `Employee & Person`                    |           |
| Literal        | \`"left"                               | "right"\` |
| Narrowing      | `typeof`, `in`, `instanceof`           |           |
| `void`/`never` | \`function x(): void                   | never\`   |
