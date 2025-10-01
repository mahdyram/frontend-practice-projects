import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && "active-link"}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive && "active-link"}
        >
          About us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive && "active-link"}
        >
          Contact us
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
