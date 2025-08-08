import { useState, useEffect } from "react";

export default function A13() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  // array vabastegi ha mitavanad khali bashad, mesle in mesal, yaeni useEffect ma be hich motaghayyeri vabaste nist, agar in array khali bashad, dastore useEffect hengame sakhte shodane compunent yekbar ejra mishavad va digar ejra nemishavad, chizi ke ma alan niaz darim ham hamin hast, niaz darim ke api ma yekbar farakhani shavad, dade hara az server daryaft konad va digar ejra nashavad.

  return (
    <div>
      <h2>Posts List :</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
