import Order from "../models/order.model.js";
import User from "../models/user.model.js";

// 🟢 Total Sales Analytics
export const getTotalSales = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$amount" }, totalOrders: { $sum: 1 } } }
    ]);
    res.json(sales[0] || { totalSales: 0, totalOrders: 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🟢 Sales by Month
export const getSalesByMonth = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          monthlySales: { $sum: "$amount" },
          orders: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🟢 Top Customers
export const getTopCustomers = async (req, res) => {
  try {
    const customers = await Order.aggregate([
      {
        $group: {
          _id: "$userId",
          totalSpent: { $sum: "$amount" },
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
          as: "user"
        }
      },
      { $unwind: "$user" },
      { $project: { "user.password": 0 } }
    ]);
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
