import axios from 'axios';
import React, { useState } from 'react';

function AddNoteModal({ openAddModal, closeAddModal, onNoteAdded }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")


    function handleModalSave() {
        const blob = { title, content }
        sendResponse(blob)
        closeAddModal()
        setTitle("")
        setContent("")
    }

    async function sendResponse(data) {
        try {
            console.log("Sending Data:", data); // Debugging log
            const response = await axios.post("http://localhost:8000/api/notes/create", data, {
                headers: { "Content-Type": "application/json" }
            });
            onNoteAdded(response.data)
        } catch (error) {
            console.error("Error sending request:", error);
        }
    }

    return (
        <>
            {openAddModal &&
                <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm z-1000'>
                    <div className='bg-zinc-900 px-3 py-5 rounded-2xl h-8/12 flex flex-col w-11/12 justify-between'>
                        <h2 className='text-white'>Add a Note</h2>
                        <div className='h-screen'>
                            <input className='w-full h-10 mt-7 text-white border-1 border-secondary p-1 outline-none' onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Edit the title' name='title' />
                            <textarea className='w-full mt-7 h-8/12 text-white border-1 border-secondary p-1 outline-none' onChange={(e) => setContent(e.target.value)} value={content} name="content" id="" placeholder='Edit the content'></textarea>
                        </div>
                        <div className='flex justify-end h-fit mt-4'>
                            <button onClick={closeAddModal} className='bg-green-400 px-4 py-2 rounded mr-2 cursor-pointer text-black'>cancle</button>
                            <button onClick={handleModalSave} className='bg-red-400 px-4 py-2 rounded mr-2 cursor-pointer text-black'>save</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddNoteModal