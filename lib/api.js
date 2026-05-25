const BASE_URL = "https://restcountries.com/v3.1";

export async function getCountries() {
  try {
    const res = await fetch(
      `${BASE_URL}/all?fields=name,flags,capital,region,population,cca3`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Countries Fetch Error:", error);
    return [];
  }
}

export async function getCountry(code) {
  try {
    const res = await fetch(
      `${BASE_URL}/alpha/${code}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Country Fetch Error:", error);
    return [];
  }
}