import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">Home page</h2>

      <Link href="/about" className="text-blue-600 font-bold border-b-2 p-0.5">
        go to About
      </Link>
      <br />

      <Link href="/dashboard" className="text-blue-600 font-bold border-b-2 p-0.5 ">
        go to Dashboard
      </Link>
      <br />

      <Link href="/product" className="text-blue-600 font-bold">
        go to Product
      </Link>
    </div>
  );
}
