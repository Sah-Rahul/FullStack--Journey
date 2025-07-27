// ✅ Classes and Objects
class Person {
  public name: string;          // public property (default)
  private age: number;          // private property (accessible only in class)
  protected country: string;    // protected property (accessible in class & subclasses)
  readonly id: number;          // readonly property (cannot be changed after init)

  constructor(name: string, age: number, country: string, id: number) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.id = id;
  }

  // Method to display info
  public display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, ID: ${this.id}`);
  }

  // Private method (only accessible inside class)
  private secret(): void {
    console.log("This is a secret method!");
  }
}

const person1 = new Person("Rahul", 22, "Nepal", 101);
person1.display();

// person1.age; ❌ Error: private
// person1.country; ❌ Error: protected
// person1.id = 202; ❌ Error: readonly


// ✅ Inheritance
class Employee extends Person {
  private role: string;

  constructor(name: string, age: number, country: string, id: number, role: string) {
    super(name, age, country, id);
    this.role = role;
  }

  // Overriding method
  public display(): void {
    super.display();
    console.log(`Role: ${this.role}`);
  }
}

const emp1 = new Employee("Sahil", 30, "India", 202, "Developer");
emp1.display();


// ✅ Generics example
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Hello Generics");
const output2 = identity<number>(123);

console.log(output1); // Hello Generics
console.log(output2); // 123
