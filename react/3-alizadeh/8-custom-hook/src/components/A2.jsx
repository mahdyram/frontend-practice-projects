import { useState } from "react";
import useMovieDB from "./hook/useMovieDB";
import genres from "./genres";

export default function A2() {
  const [genre, setGenre] = useState(35);
  const { data, loading, error } = useMovieDB({ with_genres: genre });

  const handleSelect = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div>
      <h2>Genre: {genres.find((g) => g.id == genre).name}</h2>

      <select onChange={handleSelect}>
        {genres.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
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
    </div>
  );
}
