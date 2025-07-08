Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

// Example
let sum = [1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
