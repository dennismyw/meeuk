import Image from "next/image"
import Conversation from "./[id]/page"
import ConversationDetail from "./[id]/ConversationDetail"
import CustomButton from "@/app/components/CustomButton"


const InboxPage = () => {
    return (
        <main className='  max-w-[1500px] mx-auto px-6 pb-6 space-y-4 '>
            <div className='col-span-1 md:col-span-3 text-2xl'>
                inbox
                <ConversationDetail />

            </div>
        </main>
    )
}

export default InboxPage