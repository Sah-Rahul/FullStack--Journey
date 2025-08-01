import Product from "../models/product.model.js";

//     Get all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//     Create new product
export const createProduct = async (req, res) => {
  const { title, price, inStock } = req.body;
  const newProduct = new Product({ title, price, inStock });
  await newProduct.save();
  res.status(201).json(newProduct);
};

//    Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Product not found" });
  res.json(updated);
};

//     Delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ error: "Product not found" });
  res.json({ message: "Product deleted" });
};
