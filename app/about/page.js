export default function AboutPage() {
  return (
    <section className="max-w-4xl">
      <h1 className="text-5xl font-bold tracking-tight mb-8">
        About World Explorer
      </h1>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p>
          World Explorer is a modern country explorer application
          built using Next.js App Router.
        </p>

        <p>
          The project uses the REST Countries API to fetch and
          display country information from around the world.
        </p>

        <p>
          Concepts practiced in this project include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Next.js App Router</li>
          <li>Server Components</li>
          <li>Client Components</li>
          <li>Dynamic Routes</li>
          <li>Async/Await Data Fetching</li>
          <li>Caching Strategies</li>
          <li>Responsive Design</li>
          <li>Reusable Components</li>
        </ul>
      </div>
    </section>
  );
}