import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createOrder, myOrders } from "../controllers/order.controller.js";

const router = Router();
router.post("/", isAuthenticated, createOrder);
router.get("/mine", isAuthenticated, myOrders);

export default router;
