import express from "express";
import { getAllProducts, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

// GET /api/products
router.get("/", getAllProducts);

// GET /api/products/:id
router.get("/:id", getSingleProduct);

export default router;
