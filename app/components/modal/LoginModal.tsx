'use client'
import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../CustomButton"



const LoginModal = () => {
    const LoginModal = useLoginModal()

    const content = (
        <>

            <form className="space-y-4">
                <input type="email" placeholder="Your email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />

                <input type="password" placeholder="Password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                <div className="px-5 py-5 bg-airbnb test-white rounded-xl opacity-80">The error </div>

                <CustomButton
                    label="Sumit"
                    onClick={() => console.log('test')}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="login"
            content={content}

        />

    )
}

export default LoginModal