import Link from "next/link";

export default function Setting() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">Setting page</h2>

      <Link href="/dashboard" className="text-blue-600 font-bold">
        back to dashboard
      </Link>
    </div>
  );
}
