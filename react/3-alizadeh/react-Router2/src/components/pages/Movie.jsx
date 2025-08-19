import { Link, useParams } from "react-router-dom";
import { moviesList } from "./moviesData";

export default function Movie() {
  const params = useParams();

  // console.log(params);
  // console.log(params.id);

  const movieName = moviesList.find((m) => m.id === Number(params.id));

  return (
    <div>
      <h3>
        movie-{params.id} : {movieName.name}
      </h3>

      <Link to={"/movies"}>Movies</Link>
    </div>
  );
}
