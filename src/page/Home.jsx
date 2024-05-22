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
        <div className="h-screen w-full bg-[#DDC5AA]">
            <div className="pt-36 pb-2 flex justify-center w-full border-b-2 border-gray-800">
                <h1 className="text-8xl font-extrabold">The Creations</h1>
            </div>
            <div className="h-12 w-full flex justify-evenly items-center">
                <h1 className="font-semibold italic">PHOTOGRAPHY: ROY YOBIHANA</h1>
                <h1 className="font-semibold italic">A PIECES FROM A PARALLEL REALITY</h1>
            </div>
        </div>
        {/* End First Section */}
        </>
    );
}

export default Home;