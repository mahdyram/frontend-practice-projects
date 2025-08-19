import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <ul className="ul1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
              movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
              about us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
              contact us
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet /> {/* اینجا محتوای صفحات رندر میشه */}
      </main>

      <footer>
        <h2>This is Footer</h2>
      </footer>
    </div>
  );
}
