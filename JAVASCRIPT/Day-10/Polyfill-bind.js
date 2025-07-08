Function.prototype.myBind = function(context, ...args) {
    let fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    }
}

// Example
const person = { name: "Rahul" };

function greet(message) {
    console.log(`${message}, ${this.name}`);
}

const customGreet = greet.myBind(person);
customGreet("Hello"); // Hello, Rahul
