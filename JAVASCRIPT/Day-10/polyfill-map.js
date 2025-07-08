Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// Example
let numbers = [1, 2, 3];
let doubled = numbers.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]
