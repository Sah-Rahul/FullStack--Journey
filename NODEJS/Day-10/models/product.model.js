import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: 3,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    description: {
      type: String,
      default: "No description provided.",
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", productSchema);