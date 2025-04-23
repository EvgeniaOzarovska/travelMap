'use client'

import {useEffect, useState} from "react";
import {getRegionCountries} from "@/app/api/getAllCountries";
import {useSearchParams} from "next/navigation";
import CardCountry, {Country} from "@/app/components/Card";

const CountriesPage = () => {
    const searchParams = useSearchParams();
    const region = searchParams.get("region");
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        if (!region) return;

       getRegionCountries(region)
           .then((data) => {
               setCountries(data);
           })
           .catch((err) => console.error("Error:", err));
    }, [region]);


    return (
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-center">{region} Countries</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                      {countries.map((country ) => (
                          <li className="bg-blue-100 shadow-md p-6 rounded-xl text-center w-64" key={country.name}>
                             <CardCountry key={country.cca2} country={country}/>
                          </li>
                      ))}
                  </ul>
              </div>
    );
}

export default CountriesPage;
