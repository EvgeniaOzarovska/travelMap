import Image from "next/image";

export interface City {
    name: string;
    region: string;
    population: number;
    id: string;
}

function CityCard({ city }: { city: City }) {
    const { name, region, population } = city;

    return (
        <div className="card cursor-pointer">
            <h4 className="font-bold mb-4">{name}</h4>
                <Image
                    className="block mx-auto mb-4"
                    src={"/images/oceania.jpg"}
                    alt={name}
                    width={100}
                    height={100}
                    style={{width: "auto", height: "auto"}}
                />
            <p><strong>City:</strong> {name}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Region:</strong> {region}</p>
        </div>
    );
}

export default CityCard;
