// Example  : 'this' in a class method
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(this.brand);
  }
}

const car = new Car("Tesla");
car.showBrand();  // Tesla

// Example 2: 'this' in an object method
const user = {
  name: "Charlie",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // Hello, Charlie

// Example 3: 'this' in a regular function (global context)
function sayHello() {
  console.log(this);
}

sayHello(); // In browser, logs Window object

// Example 4: 'this' in arrow functions
const obj = {
  name: "Diana",
  arrowGreet: () => {
    console.log(this.name);  // undefined, arrow functions don't have their own 'this'
  },
  regularGreet() {
    console.log(this.name);
  }
};

obj.arrowGreet();  // undefined
obj.regularGreet(); // Diana
