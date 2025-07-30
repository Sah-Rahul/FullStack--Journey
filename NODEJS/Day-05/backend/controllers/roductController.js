import products from "../data/products.js";

//    Get all products
//  GET /api/products
export const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    data: products,
  });
};

//    Get single product by ID
//   GET /api/products/:id
export const getSingleProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};
