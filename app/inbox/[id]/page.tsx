import React from 'react'
import ConversationDetail from './ConversationDetail';

const Conversation = () => {
    return (
        <div className='px-6 py-4 cursor-pointer border border-gray-400 rounded-xl '>
            <ConversationDetail />
            <p className='mb-6 text-xl'>John</p>

            <p className='text-airbnb-dark'>Go to conversation</p>
        </div>


    )
}

export default Conversation;