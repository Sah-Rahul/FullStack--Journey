import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: String,
  price: Number,
  quantity: Number,
  category: String
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [itemSchema],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["pending","paid","shipped","delivered","cancelled"], default: "pending" }
}, { timestamps: true });

orderSchema.index({ createdAt: -1 });

export default mongoose.model("Order", orderSchema);
