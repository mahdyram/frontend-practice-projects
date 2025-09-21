import { products } from "@/data/products";
import Link from "next/link";

export default function Products() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-5">
        Products Page
      </h2>

      <ul>
        {categories.map((c) => (
          <li key={c}>
            <Link
              href={`/products/${c}`}
              className="block w-40 text-center py-1.5 mx-auto mb-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
            >
              {c}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
      >
        Home
      </Link>
    </div>
  );
}
