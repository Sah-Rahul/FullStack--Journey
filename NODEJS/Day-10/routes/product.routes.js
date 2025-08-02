import express from "express";
import {
  getProductById,
  updateProduct,
  patchProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);