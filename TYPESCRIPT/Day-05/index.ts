// ✅ Interface: like a type structure for objects
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

const user1: User = {
  id: 1,
  name: "Rahul",
};

// ✅ Interface for function
interface Greet {
  (name: string): string;
}

const sayHi: Greet = (name) => `Hello, ${name}`;
console.log(sayHi("Rahul"));


// ✅ Enums: group of named constants
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let myRole: Role = Role.Admin;
console.log("Role:", myRole);


// ✅ Union Types
type Status = "success" | "failed" | "pending";
let paymentStatus: Status = "success";

// ✅ Intersection Types
type Person = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type PersonWithAddress = Person & Address;

const person: PersonWithAddress = {
  name: "Sagar",
  age: 25,
  city: "Kathmandu",
  country: "Nepal",
};


// ✅ Type Assertions
let message: any = "I am a string";
let strLength: number = (message as string).length;


// ✅ Utility Types
type Product = {
  id: number;
  title: string;
  price: number;
  inStock?: boolean;
};

// Partial: all optional
type PartialProduct = Partial<Product>;

// Required: all required
type RequiredProduct = Required<Product>;

// Readonly: all readonly
type ReadonlyProduct = Readonly<Product>;

// Pick: select some fields
type ProductPreview = Pick<Product, "id" | "title">;

// Omit: remove some fields
type ProductWithoutStock = Omit<Product, "inStock">;

