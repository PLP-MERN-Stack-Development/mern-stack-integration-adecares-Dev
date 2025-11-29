import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <div key={post._id} className="border p-4 rounded shadow hover:bg-gray-100">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-sm">{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post._id}`} className="text-blue-600 mt-2 inline-block">Read More</Link>
        </div>
      ))}
    </div>
  );
}
