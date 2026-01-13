import { useEffect, useState } from "react";
import Loading from "./Loading";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const fetchAPi = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const res: Product[] = await response.json();
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPi();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredProducts = products

    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

    .filter((item) => item.rating.rate >= minRating)

    .filter((item) => item.price <= maxPrice)

    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      if (sort === "rating") return b.rating.rate - a.rating.rate;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 flex gap-6">
        <aside className="hidden md:block w-64 bg-white rounded-xl shadow p-4 h-fit">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Sort By</h3>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setMinRating(4)}
                  checked={minRating === 4}
                />
                ⭐⭐⭐⭐ & above
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setMinRating(3)}
                  checked={minRating === 3}
                />
                ⭐⭐⭐ & above
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setMinRating(2)}
                  checked={minRating === 2}
                />
                ⭐⭐ & above
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => setMinRating(0)}
                  checked={minRating === 0}
                />
                All Ratings
              </label>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="md:hidden mb-4 flex gap-2">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No products found</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 object-contain mb-4"
                  />

                  <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-xs text-gray-500 capitalize">
                    {item.category}
                  </p>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-lg font-bold text-green-600">
                      ${item.price}
                    </p>
                    <p className="text-sm text-yellow-500">
                      ⭐ {item.rating.rate} ({item.rating.count})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
