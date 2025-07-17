// 🔹 Target DOM Elements
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

const products = [
  { id: 1, name: "Nike Shoes", price: 59.99, img: "./img/p1.jpg" },
  { id: 2, name: "Adidas T-Shirt", price: 25.5, img: "./img/p2.jpg" },
  { id: 3, name: "Apple Watch", price: 199.99, img: "./img/p3.jpg" },
  { id: 4, name: "Gaming Mouse", price: 45.0, img: "./img/p4.jpg" },
  { id: 5, name: "Gaming Mouse", price: 45.0, img: "./img/p5.jpg" },
];

products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
  `;
  productList.appendChild(card);
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id);
    const product = products.find((p) => p.id === id);
    const inCart = cart.find((item) => item.id === id);

    if (inCart) {
      inCart.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    renderCart();
  }
});

 
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p>Your cart is empty</p>`;
    checkoutBtn.disabled = true;
    totalDisplay.innerText = "0.00";
    return;
  }

  checkoutBtn.disabled = false;
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    cartItems.appendChild(div);
  });

  totalDisplay.innerText = total.toFixed(2);
}
