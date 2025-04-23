"use client";
import {useRouter} from "next/navigation";


const NotFoundPage = () => {
const router = useRouter();

const goBack = () => {
    router.push("/");
};
return (

    <div className="flex flex-col justify-center items-center h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
        <button className="p-2 border-1 rounded-md text-amber-600 hover:cursor-pointer hover:bg-amber-600 hover:text-white" onClick={() => goBack()}>
            Go back to Home
        </button>
    </div>
)}


export default NotFoundPage;
