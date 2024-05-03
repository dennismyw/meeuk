'use client'
import Modal from "./Modal"
import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../CustomButton"



const SignupModal = () => {
    const SignupModal = useSignupModal()

    const content = (
        <>

            <form className="space-y-4">
                <input type="email" placeholder="Your email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />

                <input type="password" placeholder="Password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                <input type="password" placeholder="Repeat Password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
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
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Signup"
            content={content}

        />

    )
}

export default SignupModal