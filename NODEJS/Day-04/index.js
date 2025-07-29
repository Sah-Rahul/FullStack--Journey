import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Error Handler (last middleware)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
