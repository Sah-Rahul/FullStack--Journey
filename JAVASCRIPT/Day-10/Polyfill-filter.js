Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// Example
let nums = [1, 2, 3, 4, 5];
let evenNums = nums.myFilter(num => num % 2 === 0);
console.log(evenNums); // [2, 4]
