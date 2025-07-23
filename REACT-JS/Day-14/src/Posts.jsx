// Using axios()

import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => setError("Error fetching posts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>⏳ Loading posts...</p>;
  if (error) return <p>❌ {error}</p>;

  return (
    <div>
      <h2> Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
