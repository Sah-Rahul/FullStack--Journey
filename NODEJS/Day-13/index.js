import express from "express";
import path from "path";
import uploadRoutes from "./routes/upload.route";

const app = express();

// Serve uploads folder as static
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/upload", uploadRoutes);

export default app;
