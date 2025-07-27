# 📅 Day 5 – TypeScript Interfaces, Enums, and Advanced Types

## ✅ Interfaces
- Defines structure for objects/functions/classes.
- Supports optional & readonly properties.

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```
### ✅ Enums
- Named constants.
```ts
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
```
### ✅ Union & Intersection Types
```ts
type Status = "success" | "error";
type A = { x: number };
type B = { y: string };
type AB = A & B;
```
### ✅ Type Assertions
- Tell TypeScript the expected type.

```ts
const value: any = "text";
const len = (value as string).length;
```
## ✅ Utility Types
| Type        | Description                |
| ----------- | -------------------------- |
| Partial<T>  | All properties optional    |
| Required<T> | All properties required    |
| Readonly<T> | All properties readonly    |
| Pick\<T, K> | Select specific properties |
| Omit\<T, K> | Remove specific properties |
## 🧠 Summary
- interface helps you build predictable, reusable structures.

- enum is useful for fixed choices.

- union/intersection types combine flexibility with structure.

- Utility types save time by modifying existing types smartly.