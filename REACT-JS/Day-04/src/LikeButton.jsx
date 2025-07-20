import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>❤️ Like Button with Icon</h2>
      <button onClick={() => setLiked(!liked)} style={{ fontSize: "2rem", cursor: "pointer", background: "none", border: "none" }}>
        {liked ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
      <p>You {liked ? "liked" : "haven't liked"} this post.</p>
    </div>
  )
}

export default LikeButton
