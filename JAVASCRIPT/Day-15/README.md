# 🚀 JavaScript Deep Dive: Classes, OOP, `this` Keyword, Prototype & Inheritance

This document explains fundamental object-oriented programming (OOP) concepts in JavaScript, including how classes work, the behavior of the `this` keyword, prototype inheritance, and how to extend classes.

---

## 📚 What You Will Learn:

1. Classes and Constructors  
2. The `this` Keyword  
3. Prototype and Method Sharing  
4. Inheritance with `extends` and `super()`  

---

## 1️⃣ Classes and Constructors

- Classes are blueprints for creating objects.
- The `constructor()` method is a special function used to initialize new objects.

### Example:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 28);
person1.introduce(); // Hi, I'm Alice and I'm 28 years old.
```
## 2️⃣ The this Keyword
- Refers to the object that is currently calling the function.

- Behavior depends on how and where the function is called.
### Examples:
```js
// Inside a class method
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(this.brand);
  }
}

const car = new Car("Tesla");
car.showBrand(); // Tesla

// Inside an object method
const user = {
  name: "Charlie",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // Hello, Charlie

// In regular function call (global context)
function sayHello() {
  console.log(this);
}

sayHello(); // Window (in browsers)

// In arrow functions
const obj = {
  name: "Diana",
  arrowGreet: () => {
    console.log(this.name); // undefined, arrow functions have no own this
  },
  regularGreet() {
    console.log(this.name);
  }
};

obj.arrowGreet(); // undefined
obj.regularGreet(); // Diana
```
## 3️⃣ Prototype
- Objects have a hidden prototype which allows sharing properties and methods.

- Methods defined on a prototype are shared across all instances.
### Example:
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound
```
## 4️⃣ Inheritance: extends and super()
- extends creates a child class that inherits from a parent class.

- super() calls the constructor of the parent class.
### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

const dog1 = new Dog("Max", "Golden Retriever");
dog1.speak(); // Max makes a sound
dog1.bark(); // Max barks loudly!
```
| Topic          | Description                                   |
| -------------- | --------------------------------------------- |
| Classes        | Blueprints for creating objects               |
| Constructor    | Initializes object properties                 |
| `this` keyword | Refers to current calling object              |
| Prototype      | Shared properties/methods through inheritance |
| `extends`      | Child class inherits from parent              |
| `super()`      | Calls parent constructor                      |
 
## Notes
- Use regular functions for methods that rely on this.

- Arrow functions do not have their own this.

- Prototypes provide a powerful and memory-efficient way to share methods.

- Inheritance promotes code reuse and modular design.