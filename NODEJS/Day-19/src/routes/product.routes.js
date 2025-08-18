import { Router } from "express";
import { isAuthenticated, authorize } from "../middleware/auth.js";
import { createProduct, listProducts } from "../controllers/product.controller.js";
import { upload } from "../utils/upload.js";

const router = Router();

router.get("/", listProducts);
router.post("/", isAuthenticated, authorize("admin"), upload.array("images", 6), createProduct);

export default router;
