import mongoose from "mongoose";
import { config } from "../config/index.js";

export const connectDB = async () => {
  if (!config.mongoURI) throw new Error("MONGO_URI missing");
  await mongoose.connect(config.mongoURI);
  console.log("✅ MongoDB connected");
};
