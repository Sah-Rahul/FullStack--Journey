// 🔸  Debounce
// "Wait until the user stops typing, then run the function."

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example: Search input
function searchData(query) {
  console.log("Searching for:", query);
}

const input = document.getElementById("search");
input.addEventListener(
  "input",
  debounce((e) => searchData(e.target.value), 500)
);
