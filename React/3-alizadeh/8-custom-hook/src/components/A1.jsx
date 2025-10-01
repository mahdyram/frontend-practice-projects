import { useState } from "react";
import useMovieDB from "./hook/useMovieDB";

export default function A1() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useMovieDB({ page });

  return (
    <div>
      <h2>Page: {page}</h2>

      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        prev
      </button>
      <button onClick={() => setPage((p) => p + 1)}>next</button>
      <br />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && data !== null && (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
      <hr className="hr1" />
    </div>
  );
}
