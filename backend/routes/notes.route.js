const express = require("express");
const router = express.Router();

const {
  handleAllNotes,
  handleCreateNotes,
  handleEditNotes,
  handleDeleteNotes,
} = require("../controller/note.control");

//Notes load
router.get("/", handleAllNotes);

//create note
router.post("/create", handleCreateNotes);

//Edit note
router.patch("/:id", handleEditNotes);

//Delete note
router.delete("/:id", handleDeleteNotes);

module.exports = router;
