import { products } from "@/data/products";
import Link from "next/link";

export default function ProductInfo({ params }) {
  const { id } = params;
  const goalProduct = products.find((p) => p.id == id);

  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">
        ProductInfo page {id}
      </h2>

      <h3 className="font-bold text-2xl mb-5 text-cyan-800">
        {goalProduct.description}
      </h3>

      <Link href="/product" className="text-blue-600 font-bold">
        back to Product
      </Link>
    </div>
  );
}
