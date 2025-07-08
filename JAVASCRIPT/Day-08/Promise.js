function task(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, time);
    });
}

task(1000, "Step 1 completed")
    .then(() => task(1000, "Step 2 completed"))
    .then(() => task(1000, "Step 3 completed"))
    .then(() => task(1000, "Step 4 completed"))
    .then(() => console.log("All steps done!"))
    .catch(err => console.log("Error:", err));
