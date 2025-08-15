import express from "express";
import { getTotalSales, getSalesByMonth, getTopCustomers } from "../controllers/analytics.controller.js";
import { authenticate, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/total-sales", authenticate, isAdmin, getTotalSales);
router.get("/sales-by-month", authenticate, isAdmin, getSalesByMonth);
router.get("/top-customers", authenticate, isAdmin, getTopCustomers);

export default router;
