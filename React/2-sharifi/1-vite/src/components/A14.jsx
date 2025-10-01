import { useState, useEffect } from "react";

export default function A14() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // loading flag

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // success or failure, loading is over
      }
    };
    getPosts();
  }, []);

  if (loading) return <h2>Loading data ...</h2>;

  if (posts.length === 0) return <h2>No posts found.</h2>;

  return (
    <div>
      <h2>Posts List:</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
