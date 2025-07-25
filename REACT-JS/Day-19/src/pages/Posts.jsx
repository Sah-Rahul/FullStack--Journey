import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3"> Posts List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">❌ {error}</p>}

      {posts.map((post) => (
        <div key={post.id} className="mb-3 p-4 rounded shadow bg-white">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
