import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="text-center mt-5">
      <h2 className="font-bold text-4xl mb-5 text-slate-800">Dashboard page</h2>

      <Link href="/dashboard/setting" className="text-blue-600 font-bold border-b-2 p-0.5">
        go to Setting
      </Link>
      <br />

      <Link href="/" className="text-blue-600 font-bold">
        back to Home
      </Link>
    </div>
  );
}
