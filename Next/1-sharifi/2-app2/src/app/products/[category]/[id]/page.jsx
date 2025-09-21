import { products } from "@/data/products";
import Link from "next/link";

export default async function ProductInfo({ params }) {
  const { category, id } = await params;
  const goalProduct = products.find((p) => p.id == id);

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 mb-10">
        <h2 className="text-4xl font-bold text-emerald-700 text-center mb-4">
          {goalProduct.name}
        </h2>
        <p className="text-xl text-gray-500 font-semibold text-center">{goalProduct.description}</p>
      </div>

      <Link
        href={`/products/${category}`}
        className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
      >
        {category}
      </Link>
    </div>
  );
}
