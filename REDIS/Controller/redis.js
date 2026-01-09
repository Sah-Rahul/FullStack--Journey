import axios from "axios";
import { redis } from "./redis.js";

export const getPosts = async (req, res) => {
  const cacheKey = "posts:all";

  // 1. Cache check
  const cached = await redis.get(cacheKey);
  if (cached) {
    return res.json({
      source: "redis",
      data: JSON.parse(cached),
    });
  }

  // 2. External API call
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // 3. Redis SET with TTL
  await redis.set(
    cacheKey,
    JSON.stringify(data),
    "EX",
    300 // 5 min
  );

  res.json({
    source: "api",
    data,
  });
};


export const updatePost = async (req, res) => {
  const { id } = req.params;

  await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    req.body
  );

  //  Cache invalidation
  await redis.del("posts:all");

  res.json({ message: "Post updated & cache cleared" });
};


await redis.del([
  "posts:all",
  "posts:user:1",
  "posts:page:1",
]);
