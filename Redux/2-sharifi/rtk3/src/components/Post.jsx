import { useSelector, useDispatch } from "react-redux";
import { postFetch } from "../redux/postSlice";
import { useEffect } from "react";

export default function Post() {
  const { posts, status, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(postFetch());
  }, [dispatch, status]);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>createAsyncThunk</h1>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
