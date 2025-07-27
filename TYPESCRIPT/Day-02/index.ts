// ✅ Function with return type
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Rahul"));

// ✅ void return
function log(msg: string): void {
  console.log("Log:", msg);
}
log("Day 2 running");

// ✅ Default & Optional Parameters
function sum(a: number, b: number = 10): number {
  return a + b;
}
console.log("Sum:", sum(5));

function greetUser(name?: string): string {
  return name ? `Hi ${name}` : "Hi Guest";
}
console.log(greetUser("Sagar"));
console.log(greetUser());

// ✅ Union Type
let score: number | string;
score = 100;
console.log(score);
score = "Hundred";
console.log(score);

// ✅ Intersection Type
type A = { a: number };
type B = { b: string };
type AB = A & B;

const obj: AB = { a: 1, b: "test" };
console.log(obj);

// ✅ Literal Types
let direction: "left" | "right" | "center";
direction = "left";
console.log("Direction:", direction);

// ✅ Type Narrowing - typeof
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log("Uppercased:", val.toUpperCase());
  } else {
    console.log("Fixed:", val.toFixed(2));
  }
}
printValue(45.678);
printValue("rahul");

// ✅ Narrowing - in
type Admin = { role: string };
type User = { username: string };

function checkUser(person: Admin | User) {
  if ("role" in person) {
    console.log("Admin:", person.role);
  } else {
    console.log("User:", person.username);
  }
}
checkUser({ role: "superadmin" });
checkUser({ username: "rahhul" });

// ✅ Narrowing - instanceof
function showDate(d: Date | string) {
  if (d instanceof Date) {
    console.log("Full Date:", d.toDateString());
  } else {
    console.log("Parsed Date:", new Date(d).toDateString());
  }
}
showDate(new Date());
showDate("2025-07-18");

// ✅ void function
function warnUser(msg: string): void {
  console.warn("⚠️", msg);
}
warnUser("Low battery!");

// ✅ never function
function crash(): never {
  throw new Error("Unexpected crash!");
}
// crash(); // Uncomment to test
