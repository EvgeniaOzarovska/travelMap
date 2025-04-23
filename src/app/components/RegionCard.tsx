import Image from "next/image";
import { useRouter } from 'next/navigation';

interface IMG {
    name: string;
    image: string;
}

export const RegionCard = () => {
    const router = useRouter();


    const continents: IMG[] = [
        { name: "Europe", image: "/images/europe.jpg" },
        { name: "Asia", image: "/images/asia.jpg" },
        { name: "Africa", image: "/images/africa.jpg" },
        { name: "North America", image: "/images/northAmerica.jpg" },
        { name: "South America", image: "/images/southAmerica.jpg" },
        { name: "Oceania", image: "/images/oceania.jpg" },
        { name: "Antarctica", image: "/images/antarctica.jpg" },
        { name: "All Countries", image: "/images/allCountries.jpg" },
    ];

    const showRegionCountries = (continent:string) => {
      router.push(`/pages/countries?region=${continent}`);

    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {continents.map((continent) => (
                    <div className="flex flex-col items-center" key={continent.name}>
                        <div>
                            <Image
                                className="mb-2"
                                src={continent.image}
                                alt={continent.name}
                                width={200}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => showRegionCountries(continent.name)}
                                className="p-2 border-1 rounded-md text-amber-600 hover:cursor-pointer hover:bg-amber-600 hover:text-white"
                            >
                                {continent.name}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
