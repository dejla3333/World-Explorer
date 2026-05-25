import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="card overflow-hidden group">
      <img
        src={country.flags?.svg}
        alt={country.name?.common}
        className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          {country.name?.common}
        </h2>

        <div className="space-y-2 text-sm text-zinc-600">
          <p>
            <span className="font-medium text-zinc-900">Capital:</span>{" "}
            {country.capital?.[0]}
          </p>

          <p>
            <span className="font-medium text-zinc-900">Region:</span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-medium text-zinc-900">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="btn-primary mt-6 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}