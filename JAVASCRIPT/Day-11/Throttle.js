// 🔸 Throttle
// "Run the function at most once every X milliseconds."

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Example: Scroll Event
function logScroll() {
  console.log("Scrolled at", new Date().toLocaleTimeString());
}

window.addEventListener("scroll", throttle(logScroll, 1000));
