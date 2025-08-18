import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { config } from "./config/index.js";
import { staticUploads } from "./utils/upload.js";
import { notFound, errorHandler } from "./middleware/error.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import productRoutes from "./routes/products.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
// Swagger (hook only)
import { setupSwagger } from "./docs/swagger.js";

const app = express();

// Core middleware
app.use(express.json());
app.use(cors({ origin: config.corsOrigin }));
app.use(helmet());
app.use(morgan("dev"));
app.use("/uploads", express.static(staticUploads));

// Rate limiting (global)
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

// Health
app.get("/", (_req, res) => res.json({ status: "ok", service: "capstone-backend" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/analytics", analyticsRoutes);

// Docs
setupSwagger(app);

// Errors
app.use(notFound);
app.use(errorHandler);

export default app;
