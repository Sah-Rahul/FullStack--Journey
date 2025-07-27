# 📅 Day 4 – TypeScript Classes, OOP, Access Modifiers & Generics

## Classes & Objects
- Classes are blueprints for creating objects.
- Use `constructor` to initialize properties.
- Supports methods and access modifiers.

## Access Modifiers
| Modifier  | Description                         | Accessibility                     |
|-----------|-----------------------------------|----------------------------------|
| public    | Accessible anywhere (default)     | Everywhere                       |
| private   | Accessible only inside class       | Inside class only                |
| protected | Accessible inside class & subclasses | Class and subclasses             |
| readonly  | Property value cannot be changed after initialization | Everywhere (read-only) |

## Inheritance
- Use `extends` to inherit from a base class.
- Subclasses can override methods.

## Generics
- Enable reusable components.
- Allow functions/classes to work with different types.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```
## Summary
- Classes provide structure & reusability.

- Access modifiers protect your data.

- Generics add flexibility to your functions & classes.