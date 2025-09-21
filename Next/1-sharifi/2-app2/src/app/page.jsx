import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Home Page
      </h2>

      <Link
        href="/products"
        className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
      >
        Products
      </Link>
    </div>
  );
}
