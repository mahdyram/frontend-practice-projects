import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <ul className="ul1">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
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
