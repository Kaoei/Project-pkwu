export default function Footer() {
    return (
        <>
        <div className="h-[80vh] w-full">
            <div className="h-1/6 w-full md:h-2/6">
                <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl">IN TOUCH:</h1>
            </div>

            <div className="mx-auto w-[95%] border-t-2 border-gray-600 flex justify-between">
                <div className="h-4 border-l-2 border-gray-600"></div>
                <div className="h-4 border-l-2 border-gray-600"></div>
                <div className="h-4 border-l-2 border-gray-600"></div>
            </div>

            <div className="lg:grid lg:grid-cols-12">

            <div className="hidden col-span-1 lg:flex items-end justify-center">
                <div className="">
                    <h1 className="font-extrabold tracking-tighter">00</h1>
                    <div className="my-1 h-8 border-l-2 border-gray-600 flex items-center">
                        <div className="w-4 border-t-2 border-gray-600"></div>
                    </div>
                    <h1 className="font-extrabold tracking-tighter">00</h1>
                </div>
            </div>

            <div className="p-12 h-auto space-y-16 md:space-y-0 md:space-x-16 md:flex md:justify-around lg:col-span-6">
                <div className="">
                    <h1 className="p-1 bg-gray-400 w-12 font-bold tracking-tight text-xs">MENU</h1>
                    <h1 className="mt-4 font-bold text-2xl">INSTAGRAM</h1>
                    <h1 className="mt-4 font-bold text-2xl">WHATSAPP</h1>
                    <h1 className="mt-4 font-bold text-2xl">+62 0878-7488-3488</h1>
                </div>

                <div className="">
                    <h1 className="p-1 bg-gray-400 w-12 font-bold tracking-tight text-xs">GEAR</h1>
                    <h1 className="mt-4 font-bold text-2xl">NIKON</h1>
                    <div className="border-l-2 border-black">
                        <div className="flex items-center space-x-2 pt-2">
                            <div className="w-10 border-t-2 border-black"></div>
                            <h1 className="font-extrabold text-2xl">ND780</h1>
                        </div>

                        <div className="flex items-center space-x-2 mt-4">
                            <div className="w-10 border-t-2 border-black"></div>
                            <h1 className="font-extrabold text-2xl">ND750</h1>
                        </div>

                        <div className="flex items-center space-x-2 mt-4">
                            <div className="w-10 border-t-2 border-black"></div>
                            <h1 className="font-extrabold text-2xl">ND3400</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-2 flex items-center space-x-3 md:mt-12 lg:col-span-4 lg:items-start lg:justify-center lg:mt-0">
                <div className="rounded-full bg-red-600 h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16"></div>
                <h1 className="font-bold text-4xl tracking-wide md:text-5xl lg:text-6xl">CONTACT</h1>

                <div className="">
                {/* Isi Contact.. */}
                </div>
            </div>

            <div className="hidden col-span-1 lg:flex items-end justify-center">
                <div className="">
                    <h1 className="font-extrabold tracking-tighter">00</h1>
                    <div className="my-1 h-8 border-r-2 border-gray-600 flex items-center">
                        <div className="w-4 border-t-2 border-gray-600"></div>
                    </div>
                    <h1 className="font-extrabold tracking-tighter">00</h1>
                </div>
            </div>

            </div>

            <div className="mt-12 mb-6 h-12 w-full flex justify-between items-center">
                <h1 className="font-bold ml-24">JAKARTA, INDONESIA</h1>
                <h1 className="font-bold mr-24">@2024</h1>
            </div>

            <div className="mx-auto w-[95%] border-b-2 border-gray-600 flex justify-between">
                <div className="h-4 border-l-2 border-gray-600"></div>
                <div className="h-4 border-l-2 border-gray-600"></div>
                <div className="h-4 border-l-2 border-gray-600"></div>
            </div>

            <div className="h-4"></div>
        </div>
        </>
    );
}
