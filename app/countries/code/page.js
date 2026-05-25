import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountry } from "@/lib/api";

// This page fetches fresh data every time.

export async function generateMetadata({ params }) {
  const data = await getCountry(params.code);

  const country = data[0];

  return {
    title: country.name.common,
    description: `Learn about ${country.name.common}`,
  };
}

export default async function CountryDetailsPage({ params }) {
  const data = await getCountry(params.code);

  if (!data || data.length === 0) {
    notFound();
  }

  const country = data[0];

  return (
    <section className="max-w-5xl mx-auto">
      <Link
        href="/countries"
        className="btn-secondary mb-10"
      >
        ← Back
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="card overflow-hidden">
          <img
            src={country.flags?.svg}
            alt={country.name.common}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            {country.name.common}
          </h1>

          <p className="text-zinc-600 text-lg mb-10">
            {country.name.official}
          </p>

          <div className="space-y-4 text-zinc-700">
            <p>
              <strong>Capital:</strong> {country.capital?.[0]}
            </p>

            <p>
              <strong>Region:</strong> {country.region}
            </p>

            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {country.population.toLocaleString()}
            </p>

            <p>
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages || {}).join(", ")}
            </p>

            <p>
              <strong>Currencies:</strong>{" "}
              {Object.values(country.currencies || {})
                .map((c) => c.name)
                .join(", ")}
            </p>

            <p>
              <strong>Time Zones:</strong>{" "}
              {country.timezones.join(", ")}
            </p>
          </div>

          <a
            href={country.maps.googleMaps}
            target="_blank"
            className="btn-primary mt-10"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}