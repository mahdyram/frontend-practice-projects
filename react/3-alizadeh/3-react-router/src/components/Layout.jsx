import { RouterProvider } from "react-router-dom";
import { router } from "../routes";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>This is Header</h1>
        <hr />
      </header>

      <main>
        <RouterProvider router={router} />
        <hr />
      </main>

      <footer>
        <h2>This is Footer</h2>
      </footer>
    </div>
  );
}
