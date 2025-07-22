import { useWishlist } from "../contexts/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h2> Wishlist</h2>
      {wishlist.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromWishlist(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
