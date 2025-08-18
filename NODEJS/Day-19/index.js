import { connectDB } from "./loaders/db.js";
import app from "./app.js";
import { config } from "./config/index.js";

const start = async () => {
  try {
    await connectDB();
    app.listen(config.port, () =>
      console.log(`🚀 Server running at http://localhost:${config.port}`)
    );
  } catch (e) {
    console.error("Startup error:", e);
    process.exit(1);
  }
};

start();
