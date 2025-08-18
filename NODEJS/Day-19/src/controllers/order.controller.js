import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  const { items } = req.body;
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const order = await Order.create({ user: req.user._id, items, totalAmount, status: "pending" });
  res.status(201).json(order);
};

export const myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort("-createdAt");
  res.json(orders);
};
