import Image from "next/image"
const Categories = () => {
    return (
        <div className="pt-5 cursor-pointer pb-8 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-gray opacity-100 hover:border-b-6    hover:opacity-80 ">
                <Image
                    src="/images/assets/community.svg"
                    alt="community"
                    width={20}
                    height={20}
                />
                <span className="text-xs"> community</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-gray opacity-100 hover:border-b-6    hover:opacity-80 ">
                <Image
                    src="/images/assets/community.svg"
                    alt="community"
                    width={20}
                    height={20}
                />
                <span className="text-xs"> community</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-gray opacity-100 hover:border-b-6    hover:opacity-80 ">
                <Image
                    src="/images/assets/community.svg"
                    alt="community"
                    width={20}
                    height={20}
                />
                <span className="text-xs"> community</span>
            </div>
        </div>
    )
}

export default Categories