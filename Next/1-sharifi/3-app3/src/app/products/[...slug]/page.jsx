import { products } from "@/data/products";
import Link from "next/link";

export default async function AllSlugs({ params }) {
  const { slug } = await params;
  console.log(slug);

  if (slug.length == 1) {
    const [category] = slug;
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

  if (slug.length == 2) {
    const [category, id] = slug;
    const goalProduct = products.find((p) => p.id == id);

    return (
      <div>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 mb-10">
          <h2 className="text-4xl font-bold text-emerald-700 text-center mb-4">
            {goalProduct.name}
          </h2>
          <p className="text-xl text-gray-500 font-semibold text-center">
            {goalProduct.description}
          </p>
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
}

//? =====================================================

// import { products } from "@/data/products";
// import Link from "next/link";

// export default async function ProductsPage({ params }) {
//   const { slug } = await params;
//   const [category, id] = slug;

//   //! Case 1: Only category
//   if (!id) {
//     const filteredProducts = products.filter((p) => p.category === category);

//     return (
//       <div className="mx-auto mt-10">
//         <h2 className="text-3xl font-semibold text-amber-700 text-center mb-5">
//           {category}
//         </h2>

//         {filteredProducts.length > 0 ? (
//           <ul>
//             {filteredProducts.map(({ id, name }) => (
//               <li key={id}>
//                 <Link
//                   href={`/products/${category}/${id}`}
//                   className="block w-40 text-center py-1.5 mx-auto mb-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-500">محصولی یافت نشد</p>
//         )}

//         <Link
//           href="/products"
//           className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
//         >
//           Products
//         </Link>
//       </div>
//     );
//   }

//   //! Case 2: Category + Product ID
//   const goalProduct = products.find((p) => p.id == id);

//   return (
//     <div>
//       <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 mb-10">
//         <h2 className="text-4xl font-bold text-emerald-700 text-center mb-4">
//           {goalProduct.name}
//         </h2>
//         <p className="text-xl text-gray-500 font-semibold text-center">
//           {goalProduct.description}
//         </p>
//       </div>

//       <Link
//         href={`/products/${category}`}
//         className="block w-40 text-center py-2 mx-auto mt-5 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
//       >
//         {category}
//       </Link>
//     </div>
//   );
// }
