"use client";

import { useMemo, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, countries]);

  return (
    <div>
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-zinc-800"
        />
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center text-zinc-500 py-20">
          No countries found.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.slice(0, 20).map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
}