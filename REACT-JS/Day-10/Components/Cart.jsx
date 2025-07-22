import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>🛒 Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
