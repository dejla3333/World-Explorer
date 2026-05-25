import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Explore the World Beautifully
        </h1>

        <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-2xl">
          Explore countries around the world and discover their
          cultures, capitals, currencies, languages, and more.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/countries" className="btn-primary">
            Explore Countries
          </Link>

          <Link href="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}