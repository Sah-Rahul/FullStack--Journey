class Person {
  constructor(name, age) {
    this.name = name;  // 'this' refers to the current instance
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 28);
const person2 = new Person("Bob", 35);

person1.introduce(); // Hi, I'm Alice and I'm 28 years old.
person2.introduce(); // Hi, I'm Bob and I'm 35 years old.
