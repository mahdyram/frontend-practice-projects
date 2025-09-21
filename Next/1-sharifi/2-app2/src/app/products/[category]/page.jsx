import { products } from "@/data/products";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-amber-700 text-center mb-5">
        {category}
      </h2>

      <ul>
        {filteredProducts.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={`/products/${category}/${id}`}
              className="block w-40 text-center py-1.5 mx-auto mb-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/products"
        className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
      >
        Products
      </Link>
    </div>
  );
}
