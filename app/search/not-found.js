import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-6xl font-bold mb-6">
        404
      </h1>

      <p className="text-zinc-600 mb-8">
        Page not found.
      </p>

      <Link href="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  );
}