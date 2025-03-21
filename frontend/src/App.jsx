import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddNoteModal from "./component/AddNoteModal";
import Nav from "./component/Nav";
import Notes from "./component/Notes";
import UserPanel from "./component/UserPanel";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [userpanel, setUserPanel] = useState(false)
  const [note, setNote] = useState([])


  function handleAddNotes() {
    setOpenAddModal(true)
  }

  function handleCancleModal() {
    setOpenAddModal(false)
  }

  function handlePanle() {
    setUserPanel(!userpanel)
  }

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/notes");
      setNote(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const handleNoteAdded = (newNote) => {
    setNote((prevNote) => [...prevNote, newNote])
  }

  const handleNoteEdited = (editedNote) => {
    setNote((prevNotes) =>
      prevNotes.map((note) => (note._id === editedNote._id ? editedNote : note))
    );
  };

  return (
    <div className="bg-primary min-h-screen overflow-x-hidden z-0">
      <Nav userPanel={handlePanle} />
      <div className="grid grid-cols-1 w-full place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {note.map((note) => (
          <Notes data={note} key={note._id} index={note._id} onNoteEdited={handleNoteEdited} />
        ))}

      </div>
      <motion.div initial={{ rotate: 0, scale: 1 }} animate={{ scale: 1 }} whileTap={{ rotate: 180 }} onClick={handleAddNotes} className="fixed bottom-5 right-5 p-5 bg-amber-500 rounded-full cursor-pointer z-100">
        <FaPlus size={30} />
      </motion.div>
      <AddNoteModal openAddModal={openAddModal} closeAddModal={handleCancleModal} onNoteAdded={handleNoteAdded} />

      {userpanel && <UserPanel backbtn={handlePanle} />}
    </div>
  )
}
export default App
