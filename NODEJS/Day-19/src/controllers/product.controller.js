import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const images = (req.files || []).map((f) => `/uploads/${f.filename}`);
  const product = await Product.create({ ...req.body, images });
  res.status(201).json(product);
};

export const listProducts = async (req, res) => {
  const { q, category, min, max, sort = "-createdAt", page = 1, limit = 12 } = req.query;
  const filter = {};
  if (q) filter.$or = [{ name: { $regex: q, $options: "i" } }, { description: { $regex: q, $options: "i" } }];
  if (category) filter.category = category;
  if (min || max) filter.price = { ...(min && { $gte: Number(min) }), ...(max && { $lte: Number(max) }) };

  const skip = (Number(page) - 1) * Number(limit);
  const [data, total] = await Promise.all([
    Product.find(filter).sort(sort).skip(skip).limit(Number(limit)),
    Product.countDocuments(filter)
  ]);
  res.json({ meta: { total, page: Number(page), limit: Number(limit) }, data });
};
