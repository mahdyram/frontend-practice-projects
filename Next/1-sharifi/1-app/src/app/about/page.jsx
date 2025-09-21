import Link from "next/link";

export default function About() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">About page</h2>

      <Link  href="/" className="text-blue-600 font-bold">
        back to Home
      </Link>
    </div>
  );
}
