import express from "express";
import { monthlySales, topCustomers, salesByCategory } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/monthly-sales", monthlySales);
router.get("/top-customers", topCustomers);
router.get("/sales-by-category", salesByCategory);

export default router;
