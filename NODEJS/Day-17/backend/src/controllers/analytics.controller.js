// controllers/analytics.controller.js
import Order from "../models/order.model.js";

// Monthly Sales Report
export const monthlySales = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalSales: { $sum: "$totalAmount" },
          orders: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Top Customers by Spending
export const topCustomers = async (req, res) => {
  try {
    const customers = await Order.aggregate([
      {
        $group: {
          _id: "$userId",
          totalSpent: { $sum: "$totalAmount" },
          orders: { $sum: 1 }
        }
      },
      { $sort: { totalSpent: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "customer"
        }
      },
      { $unwind: "$customer" },
      {
        $project: {
          customerName: "$customer.name",
          totalSpent: 1,
          orders: 1
        }
      }
    ]);

    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Sales by Product Category
export const salesByCategory = async (req, res) => {
  try {
    const report = await Order.aggregate([
      { $unwind: "$items" }, // items = products inside order
      {
        $group: {
          _id: "$items.category",
          totalSales: { $sum: { $multiply: ["$items.price", "$items.quantity"] } },
          totalQuantity: { $sum: "$items.quantity" }
        }
      },
      { $sort: { totalSales: -1 } }
    ]);

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
