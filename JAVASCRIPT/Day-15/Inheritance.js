//  Inheritance with extends and super()

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Dog inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor to initialize 'name'
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

const dog1 = new Dog("Max", "Golden Retriever");
dog1.speak();  // Max makes a sound
dog1.bark();   // Max barks loudly!
