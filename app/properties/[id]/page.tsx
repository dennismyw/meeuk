
import ReservationsSideBar from "@/app/components/navbar/properties/ReservationsSideBar"
import Image from "next/image"
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className=" relative w-full h-[64vh] overflow-hidden rounded-xl">
                <Image
                    fill
                    src="/HYDR5594.JPEG"
                    className="object-cover w-full h-full rounded-xl"
                    alt="Beach"
                />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-3 py-6 pr-6">
                    <h1 className="mb-4 text-4xl">
                        property name
                    </h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4guest-2bed-1bathroom
                    </span>
                    <hr />
                    <div className="">
                        <Image
                            src="/ELND0414.JPEG"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="use name"
                        />
                        <p ><strong className="hover:opacity-80">Dennis Mak</strong> is your host</p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        hello world!!!!!

                    </p>

                </div>
                <ReservationsSideBar>

                </ReservationsSideBar>
            </div>
        </main>
    )
}

export default PropertyDetailPage