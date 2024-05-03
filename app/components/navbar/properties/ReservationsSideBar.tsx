
const ReservationsSideBar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border-gray-300 shadow-xl">
            <h2 className="text-2xl mb-5">
                200 per night
            </h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="text-sm text-bold">
                    Guest
                </label>
                <select className="w-full  text-xm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>


                </select>
            </div>
            <div className="w-full mb-9 py-6 text-center hover:bg-airbnb-dark text-white bg-airbnb rounded-full">Book</div>
            <div className="mb-4 flex justify-between align-center">
                <p>200*4 night      </p>
                <p> $$800</p>

            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>admin fee     </p>
                <p> $9</p>

            </div>
            <hr />
            <div className="mt-4 flex justify-between align-center">
                <p>total   </p>
                <p> $70</p>

            </div>

        </aside>
    )
}

export default ReservationsSideBar