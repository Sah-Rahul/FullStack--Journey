import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/backendDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Connection Error", err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Product API with CRUD 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
