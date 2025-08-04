import Product from "../models/product.model.js";

// Get all products
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get single product by ID
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
};

// Create product
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

// Update product (PUT)
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updated) return res.status(404).json({ error: "Product not found" });
  res.json(updated);
};

// Delete product
export const deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Product not found" });
  res.json({ message: "Product deleted successfully" });
};
