// ✅ Type Aliases
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
};

const user1: User = {
  name: "Rahul",
  age: 22,
};

// ✅ Interfaces
interface Product {
  title: string;
  price: number;
  readonly id: string;
}

const product1: Product = {
  title: "Book",
  price: 299,
  id: "abc123",
};

// product1.id = "newId"; ❌ Error because it's readonly

// ✅ Type vs Interface Example
type Point = {
  x: number;
  y: number;
};

interface Coord {
  x: number;
  y: number;
}

// ✅ Extending Types
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};

const dog: Dog = {
  name: "Tommy",
  breed: "Labrador",
};

// ✅ Extending Interfaces
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}

const emp: Employee = {
  name: "Rahul",
  role: "Developer",
};

// ✅ Function Type Aliases
type Greet = (name: string) => string;

const sayHello: Greet = (name) => `Hello, ${name}`;

console.log(sayHello("Rahul"));
