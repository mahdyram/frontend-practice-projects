import { products } from "@/data/products";
import Link from "next/link";

export default function Product() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">Our Products</h2>

      <ul>
        {products.map(({ id }) => (
          <li key={id}>
            <Link
              href={`/product/${id}`}
              className="text-blue-600 font-bold border-b-2 p-0.5"
            >
              go to product {id}
            </Link>
          </li>
        ))}
      </ul>
      <br />

      <Link href="/" className="text-blue-600 font-bold">
        back to Home
      </Link>
    </div>
  );
}
