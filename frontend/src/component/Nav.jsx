import React from 'react';
import { FaUser } from "react-icons/fa";

function Nav({ userPanel }) {
    return (
        <>
            <div className='w-full border-b-2 border-secondary flex justify-between items-center mb-3 px-4 py-4'>
                <div className='text-white text-3xl font-roboto hidden sm:block cursor-pointer'>Notes</div>
                <input type="text" name="search" id="search" placeholder='search a note' className='text-lg text-white outline-1 px-5 py-3 rounded-3xl outline-secondary w-7/12' />
                <FaUser onClick={userPanel} className='w-10 h-10 bg-secondary rounded-full border-2 shrink-0 cursor-pointer' />
            </div>
        </>
    )
}

export default Nav