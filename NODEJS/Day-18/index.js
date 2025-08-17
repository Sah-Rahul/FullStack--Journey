// index.js (or server.js)
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

// routes
import analyticsRoutes from "./routes/analytics.routes.js";

dotenv.config();
const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); 
app.use(helmet()); // secure headers
app.use(morgan("dev"));

// --- Rate Limiter ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later."
});
app.use(limiter);

// --- Routes ---
app.use("/api/analytics", analyticsRoutes);

// --- Health Check ---
app.get("/", (_req, res) => res.json({ status: "ok" }));

// --- MongoDB Connect & Server Start ---
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));
