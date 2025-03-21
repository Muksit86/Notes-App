import axios from "axios";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function EditNoteModal({ openModalProp, onCloseModal, index, onNoteEdited }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (openModalProp) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [openModalProp]);

    async function editNote(id, data) {
        try {
            const response = await axios.patch(`http://localhost:8000/api/notes/${id}`, data, {
                headers: { "Content-Type": "application/json" }
            });
            onNoteEdited(response.data); // Call the callback function with the edited note
        } catch (error) {
            console.error("Error editing note:", error);
        }
    }
    function handleModalSave() {
        editNote(index, { title, content })
        onCloseModal()
    }

    return ReactDOM.createPortal(
        <>
            {openModalProp &&
                <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm z-1000'>
                    <div className='bg-zinc-900 px-3 py-5 rounded-2xl h-8/12 flex flex-col w-11/12 justify-between'>
                        <h2 className='text-white'>Edit Note</h2>
                        <div className='h-screen'>
                            <input className='w-full h-10 mt-7 text-white border-1 border-secondary p-1 outline-none' onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Edit the title' />
                            <textarea className='w-full mt-7 h-8/12 text-white border-1 border-secondary p-1 outline-none' onChange={(e) => setContent(e.target.value)} value={content} name="" id="" placeholder='Edit the content'></textarea>
                        </div>
                        <div className='flex justify-end h-fit mt-4'>
                            <button onClick={onCloseModal} className='bg-green-400 px-4 py-2 rounded mr-2 cursor-pointer text-black'>cancle</button>
                            <button onClick={handleModalSave} className='bg-red-400 px-4 py-2 rounded mr-2 cursor-pointer text-black'>save</button>
                        </div>
                    </div>
                </div>}
        </>,
        document.getElementById('portal')
    )
}

export default EditNoteModal


