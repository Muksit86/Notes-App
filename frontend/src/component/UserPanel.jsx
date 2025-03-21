import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";


function UserPanel({ backbtn }) {
    return (
        <>
            <div className='w-6/12 h-screen bg-black/10 absolute right-0 top-0 backdrop-blur-md sm:w-5/12 lg:w-2/12 md:w-4/12'>
                <div className='mt-4'>
                    <IoMdArrowRoundBack onClick={backbtn} className='text-3xl text-yellow-500 ml-3 cursor-pointer' />
                    <div className='w-full flex justify-center p-4'>
                        <h2 className='text-white text-2xl'>Abdul Muksit</h2>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <button className='w-9/12 px-3 py-2 bg-red-400 mr-4 ml-4 cursor-pointer text-lg rounded-3xl text-white'>Log outs</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanel