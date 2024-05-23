// Section Import
import FirstSection from "./FirstSection";
import Footer from "./Footer";

function Home() {
    return (
        <>

        {/* Main Page */}
        <div className="h-[90vh] w-full grid grid-rows-10">
            <div className="row-span-1 flex justify-center items-center">
                <h1 className="text-xs font-sans font-extrabold">@2024</h1>
            </div>

            <div className="row-span-9 flex justify-center">
                <div className="relative h-5/6 w-4/12 bg-gray-400"></div>

                <div className="absolute bottom-36">
                    <h1 className="text-9xl font-extrabold">ROY YOBIHANA</h1>
                </div>
            </div>
        </div>
        {/* End Main Page */}


        {/* First Section */}
            <FirstSection />
        {/* End First Section */}


        {/* Footer Section */}
            <Footer />
        {/* End Footer Section */}
        </>
    );
}

export default Home;