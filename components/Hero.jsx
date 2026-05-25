import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center">
      <div className="max-w-5xl">
        <div className="inline-block px-6 py-2 rounded-full glass mb-8">
          🌎 Discover The World
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
          Explore Countries Around The <span className="gradient-text">World</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl leading-9 mb-10 max-w-3xl mx-auto">
          Explore countries around the world and discover flags, capitals,
          languages, currencies, and more.
        </p>

        <Link
          href="/countries"
          className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 transition duration-300 shadow-2xl"
        >
          Explore Countries
        </Link>
      </div>
    </section>
  )
}