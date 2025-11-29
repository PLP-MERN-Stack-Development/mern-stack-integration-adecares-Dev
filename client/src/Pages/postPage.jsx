import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../Components/api.jsx";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostById(id)
      .then(setPost)
      .catch(console.error);
  }, [id]);

  if (!post) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${post.image}`}
          alt=""
          className="w-full mb-4 rounded"
        />
      )}
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
