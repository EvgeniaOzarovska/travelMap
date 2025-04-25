"use client";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import CityCard, {City} from "@/app/components/CityCard";
import getAllCities from "@/app/api/getAllCities";

const CityPage = () => {
    const searchParams = useSearchParams();
    const countryCode = searchParams.get("country");
    console.log("country", countryCode);
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        if (!countryCode) return;

        getAllCities(countryCode)
            .then((data) => {
                setCities(data as City[]);
            })
            .catch((err) => console.error("Error:", err));
    }, [countryCode]);


    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Cities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                {cities.map((city ) => (
                    <li className="bg-blue-100 shadow-md p-6 rounded-xl text-center w-64" key={city.id}>
                        <CityCard key={city.name} city={city}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CityPage;
