import {SearchInput} from "@/app/components/SearchInput";

export const Header = () => {
    return (
        <>
        <div className="bg-gradient-to-b from-blue-500 to-white opacity-85 text-white text-center p-4 w-full h-40">
            <h2 className="text-3xl font-bold"> The whole world is open to you</h2>
            <h4 className="text-2xl font-bold">plan your next trip</h4>
        </div>
            <div>
                <SearchInput/>
            </div>
        </>
    );
}
