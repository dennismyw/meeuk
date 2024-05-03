import Image from "next/image"

const MyReservationsPage = () => {
    return (
        <main className='  max-w-[1500px] mx-auto px-6 pb-6 '>
            <h1 className="my-6 mb-2 text-2xl">
                my reservation
            </h1>
            <div className="space-y-4">
                <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/HYDR5594.JPEG"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="reserve"
                            />
                        </div>

                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">preperty name</h2>
                        <p ><strong> checkin:</strong> 14/1/2020</p>
                        <p ><strong> checkout:</strong> 14/1/2020</p>
                        <p ><strong> total price s:</strong> 400</p>

                    </div>
                </div>
                <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/HYDR5594.JPEG"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="reserve"
                            />
                        </div>

                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">preperty name</h2>
                        <p ><strong> checkin:</strong> 14/1/2020</p>
                        <p ><strong> checkout:</strong> 14/1/2020</p>
                        <p ><strong> total price s:</strong> 400</p>

                    </div>
                </div>
                <div className="p-5  grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/HYDR5594.JPEG"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="reserve"
                            />
                        </div>

                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">preperty name</h2>
                        <p ><strong> checkin:</strong> 14/1/2020</p>
                        <p ><strong> checkout:</strong> 14/1/2020</p>
                        <p ><strong> total price s:</strong> 400</p>

                    </div>
                </div>

            </div>
        </main>
    )
}

export default MyReservationsPage