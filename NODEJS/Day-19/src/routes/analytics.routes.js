import { Router } from "express";
import Order from "../models/order.model.js";
import { isAuthenticated, authorize } from "../middleware/auth.js";

const router = Router();

router.get("/monthly-sales", isAuthenticated, authorize("admin"), async (_req, res) => {
  const data = await Order.aggregate([
    { $group: { _id: { $month: "$createdAt" }, totalSales: { $sum: "$totalAmount" }, orders: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);
  res.json(data);
});

export default router;
