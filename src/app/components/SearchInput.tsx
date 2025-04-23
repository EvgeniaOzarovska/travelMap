export const SearchInput = () => {
    return (
        <div className="flex justify-end p-4">
            <input
                type="search"
                placeholder="Search for a country..."
                className="w-60 p-2 bg-dark-navy text-grey border border-blue-600 rounded-l-md outline-none focus:ring-blue-700 cursor-pointer"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:cursor-pointer hover:bg-amber-600 transition duration-300">
                Search
            </button>
        </div>
    );
};
