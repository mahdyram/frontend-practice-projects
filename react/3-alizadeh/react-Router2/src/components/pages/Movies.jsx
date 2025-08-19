import { moviesList } from "./moviesData";
import { Link } from "react-router-dom";

export default function Movies() {
  return (
    <div>
      <h2>Movies:</h2>
      <ul>
        {moviesList.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
