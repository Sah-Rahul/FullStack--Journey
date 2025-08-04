import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🟢 Backend running successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

// Error handler
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`✅ Server started at http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("MongoDB Connection Failed", err));
