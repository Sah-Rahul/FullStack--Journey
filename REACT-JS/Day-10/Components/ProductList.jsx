import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const products = [
  { id: 1, name: "iPhone", price: 999 },
  { id: 2, name: "MacBook", price: 1999 },
];

function ProductList() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div>
      <h2> Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3>
            {item.name} - ${item.price}
          </h3>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => addToWishlist(item)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
