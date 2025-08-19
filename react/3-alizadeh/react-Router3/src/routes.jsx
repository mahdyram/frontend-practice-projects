import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Movie from "./components/pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movies/:movieId", element: <Movie /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
