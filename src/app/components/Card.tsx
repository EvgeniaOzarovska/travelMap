import Image from "next/image";

export interface Country {
    name: string;
    capital: string;
    population: number;
    area: number;
    cca2: string;
}

function CardCountry({ country }: { country: Country }) {
    const { name, capital, population, area, cca2 } = country;

    return (
        <div className="card cursor-pointer">
            <h4 className="font-bold mb-4">{name}</h4>
            {cca2 && (
                <Image
                    className="block mx-auto mb-4"
                    src={`https://flagcdn.com/w80/${cca2.toLowerCase()}.png`}
                    alt={`Flag of ${name}`}
                    width={100}
                    height={100}
                    style={{width: "auto", height: "auto"}}
                />
            )}
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Area:</strong> {area}</p>
        </div>
    );
}

export default CardCountry;
