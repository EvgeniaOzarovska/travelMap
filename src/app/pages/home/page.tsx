import {RegionCard} from "@/app/components/RegionCard";
import getAllCities from "@/app/api/getAllCities";

const HomePage = () => {
    return (
        <>
            <section className="section content-center flex
            flex-wrap justify-center items-center">
                <RegionCard/>
                <button onClick={()=> getAllCities()}>click</button>
            </section>
        </>
    );
};

export default HomePage;
