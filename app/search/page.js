import CountrySearch from "@/components/CountrySearch";
import { getCountries } from "@/lib/api";

export default async function SearchPage() {
  const countries = await getCountries();

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Search Countries
        </h1>

        <p className="text-zinc-600 mt-3">
          Instantly search countries by name.
        </p>
      </div>

      <CountrySearch countries={countries} />
    </section>
  );
}