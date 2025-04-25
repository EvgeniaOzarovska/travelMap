import axios from "axios";

export async function getRegionCountries(region: string) {
        try {
            const url = region === "All Countries"
                ? "https://restcountries.com/v3.1/all"
                : `https://restcountries.com/v3.1/region/${region}`;

            const response = await axios.get(url);
            return response.data.map((country: any) => ({
                name: country.name?.common || "Unknown",
                capital: country.capital?.[0] || "No capital",
                population: country.population || 0,
                area: country.area || 0,
                borders: country.borders || [],
                continents: country.continents || [],
                cca2: country.cca2 || "Unknown",
            }));
        } catch (error) {
            console.error("Error fetching countries:", error);
            return [];
        }
    };
