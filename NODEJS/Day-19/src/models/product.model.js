import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  description: String,
  price: { type: Number, required: true, index: true },
  category: { type: String, index: true },
  images: [String],
  stock: { type: Number, default: 0 }
}, { timestamps: true });

productSchema.index({ name: "text", description: "text" });

export default mongoose.model("Product", productSchema);
