const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.getElementById("categoryButtons");

let allProducts = [];
let filteredProducts = [];
let categories = [];
let selectedCategory = "all";

// Fetch products and categories
async function fetchData() {
  try {
    // Get all products
    const resProducts = await fetch("https://fakestoreapi.com/products");
    allProducts = await resProducts.json();
    console.log(allProducts)

    // Get categories
    const resCategories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    categories = await resCategories.json();

    // Add 'all' category
    categories.unshift("all");

    renderCategoryButtons();
    filteredProducts = allProducts;
    renderProducts(filteredProducts);
  } catch (err) {
    productsContainer.innerHTML = `<p style="color:red; text-align:center;">Failed to load data. Try again later.</p>`;
    console.error(err);
  }
}

// Render category buttons
function renderCategoryButtons() {
  categoryButtons.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.category = cat;
    if (cat === selectedCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      selectedCategory = cat;
      updateFilters();
      updateCategoryActive();
    });
    categoryButtons.appendChild(btn);
  });
}

// Update active category button style
function updateCategoryActive() {
  const buttons = categoryButtons.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === selectedCategory);
  });
}

// Render product cards
function renderProducts(products) {
  if (products.length === 0) {
    productsContainer.innerHTML =
      '<p style="text-align:center; color:#777;">No products found.</p>';
    return;
  }
  productsContainer.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" class="product-image" />
          <div class="product-title" title="${p.title}">${p.title}</div>
          <div class="product-price">$${p.price.toFixed(2)}</div>
        `;
    productsContainer.appendChild(card);
  });
}

// Filter products based on search and category
function updateFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
  renderProducts(filteredProducts);
}

// Event listener for search input
searchInput.addEventListener("input", updateFilters);

// Initialize
fetchData();
