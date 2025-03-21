import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import EditNoteModal from './EditNoteModal';

function Notes({ data, index, onNoteEdited }) {
    const [openModal, setOpenModal] = useState(false)
    const [deleteNote, setDeleteNote] = useState(true)

    async function deleteNoteBackend(id) {
        await axios.delete(`http://localhost:8000/api/notes/${id}`)
    }

    function handleOpenModal() {
        setOpenModal(true)
    }

    function handleDeleteNote() {
        deleteNoteBackend(index)
        setDeleteNote(false)
    }

    function handleContent(content) {
        const maxLength = 25
        if (content.length >= maxLength) {
            content = content.substring(0, maxLength) + '...';
            return content
        } else {
            return content
        }

    }
    return (
        <>
            {deleteNote &&
                <motion.div initial={{ scale: .9 }} animate={{ scale: 1 }} className='w-100 h-fit px-5 py-4 bg-zinc-900 shadow-lg rounded-2xl mt-5 mb-2 flex flex-col justify-between sm:w-75 md:w-90 lg:w-80'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-base text-gray-300'>{data.title}</h1>
                        <h3 className='text-base text-gray-300'>{data.date}</h3>
                    </div>

                    <p className='w-full h-fit text-xl text-white my-5'>{handleContent(data.content)}</p>

                    <div className='w-full flex justify-between items-center mt-3'>
                        <MdEdit onClick={handleOpenModal} className='text-base cursor-pointer text-secondary' />
                        <MdDelete onClick={handleDeleteNote} className='text-base cursor-pointer text-secondary' />
                    </div>
                </motion.div>
            }
            <EditNoteModal index={index} openModalProp={openModal} onCloseModal={() => setOpenModal(false)} onNoteEdited={onNoteEdited} />
        </>
    )
}

export default Notes

