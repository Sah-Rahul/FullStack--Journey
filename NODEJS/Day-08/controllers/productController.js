import Product from "../models/product.model.js";

//      Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500);
    throw new Error("Failed to fetch products");
  }
};

//     Add a new product
export const createProduct = async (req, res) => {
  const { title, price, inStock } = req.body;

  if (!title || !price) {
    res.status(400);
    throw new Error("Title and price are required");
  }

  const newProduct = new Product({ title, price, inStock });
  const saved = await newProduct.save();

  res.status(201).json({ success: true, product: saved });
};
