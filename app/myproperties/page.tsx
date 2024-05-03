import Image from "next/image"
import PropertyList from "../components/navbar/properties/PropertyList"

const MyPropertiesPage = () => {
    return (
        <main className='  max-w-[1500px] mx-auto px-6 pb-6 '>
            <div className='col-span-1 md:col-span-3 pl-0 md:pl-6'>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                    <PropertyList />
                </div>
            </div>
        </main>
    )
}

export default MyPropertiesPage