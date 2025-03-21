import React from 'react'

function Search() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <input type="text" name="search" id="search" placeholder='search a title' className='text-sm text-white outline-1 px-5 w-12/12 py-3 rounded-3xl outline-yellow-500' />
            </div>
        </>
    )
}

export default Search