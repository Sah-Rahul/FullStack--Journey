import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './Components/Wishlist'

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ProductList />
        <Cart />
        <Wishlist />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
