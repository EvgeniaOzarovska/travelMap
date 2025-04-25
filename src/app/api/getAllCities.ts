import axios from "axios";

const getAllCities = async (cca2:string) => {
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
        params: {
            countryIds: cca2,
            limit: 10,
            sort: 'name'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.data;
    } catch (error) {
        console.error("Ошибка при получении городов:", error);
        return [];
    }
};

export default getAllCities;
