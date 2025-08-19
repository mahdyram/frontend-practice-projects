import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
