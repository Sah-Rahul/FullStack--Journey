function Animal(name) {
  this.name = name;
}

// Adding method to prototype — shared by all Animal instances
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Buddy");
dog.speak();  // Buddy makes a sound

const cat = new Animal("Whiskers");
cat.speak();  // Whiskers makes a sound
