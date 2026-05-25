import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/api";

// This page can be statically rendered and cached.

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Countries
        </h1>

        <p className="text-zinc-600 mt-3">
          Browse countries from around the world.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}