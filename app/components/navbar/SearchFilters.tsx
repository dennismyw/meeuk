const SearchFilters = () => {
    return (
        <div className="lg:h-[64px] h-[48px]  flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-normal">
                    <div className="  h-[64px] px-8  cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 ">
                        <p className="text-xs font-semibold">where</p>
                        <p className="text-sm"> Wanted location </p>
                    </div>
                    <div className="  h-[64px] px-8  cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 ">
                        <p className="text-xs font-semibold">check in </p>
                        <p className="text-sm"> Add date</p>
                    </div>
                    <div className="  h-[64px] px-8  cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 ">
                        <p className="text-xs font-semibold">check out </p>
                        <p className="text-sm"> Add date</p>
                    </div>
                    <div className="  h-[64px] px-8  cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 ">
                        <p className="text-xs font-semibold">who </p>
                        <p className="text-sm"> Add guess</p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="p-2 lg:p-4 bg-airbnb rounded-full transition cursor-pointer hover:bg-airbnb-dark text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.2-5.2M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
                    </svg>
                </div>
            </div>
        </div>

    )
}
export default SearchFilters