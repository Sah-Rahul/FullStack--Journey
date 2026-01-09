import { redis } from "../config/redis.js";
import Product from "../models/product.model.js";


export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  // Cache clear
  await redis.del("products");

  res.status(201).json(product);
};


export const getProducts = async (req, res) => {
  try {
    // 1. Redis check
    const cachedProducts = await redis.get("products");

    if (cachedProducts) {
      console.log("🔥 From Redis");
      return res.json(JSON.parse(cachedProducts));
    }

    // 2. DB hit
    const products = await Product.find();

    // 3. Redis me set (10 min)
    await redis.set(
      "products",
      JSON.stringify(products),
      "EX",
      600
    );

    console.log("🗄️ From DB");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
