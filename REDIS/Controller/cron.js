import cron from "node-cron";
import { redis } from "./redis.js";
import Product from "../models/product.model.js";

cron.schedule("0 0 * * *", async () => {
  console.log("🕛 Cron started");

  // DB cleanup
  await Product.deleteMany({ expired: true });

  // Cache clear
  await redis.del("products");

  console.log("✅ Cache + DB cleaned");
});

// 🔒 Cron Job Lock (Redis Advanced)
// Problem:

// Multiple servers → cron duplicate run ❌
// Solution:
// Redis lock

const lock = await redis.set("cron_lock", "true", "NX", "EX", 300);

if (!lock) return;

cron.schedule("*/5 * * * *", async () => {
  // Acquire lock
  const lock = await redis.set("cron:post-sync-lock", "true", "NX", "EX", 240);

  if (!lock) {
    console.log("❌ Another instance running");
    return;
  }

  console.log("✅ Cron started");

  // Refresh cache
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  await redis.set("posts:all", JSON.stringify(data), "EX", 300);

  console.log("🔥 Cache refreshed by cron");
});
