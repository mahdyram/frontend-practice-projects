import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to={"/movies"}>movies</Link>
      <Link to={"/about"}>about us</Link>
      <Link to={"/contact"}>contact us</Link>
    </div>
  );
}
