import Link from "next/link";

export default function OperatorPage() {
  return (
    <div className="flex flex-col space-y-2 m-2 p-2 bg-slate-800 rounded-md">
      <Link href="/operator/flight-plans">Flight Plans</Link>
      <Link href="/operator/flight-routes">Flight Routes</Link>
    </div>
  );
}
