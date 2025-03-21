const noteModel = require("../model/note.model");

async function handleAllNotes(req, res) {
  const notes = await noteModel.find();
  res.send(notes);
}

async function handleCreateNotes(req, res) {
  const fordatedDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const title = req.body.title;
  const content = req.body.content;
  const date = fordatedDate;

  try {
    const note = await noteModel.create({
      title: title,
      content: content,
      date: date,
    });

    res.send(note);
  } catch (error) {
    console.log(error);
  }
}

async function handleEditNotes(req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;

  try {
    const updateNote = await noteModel.findOneAndUpdate(
      { _id: id },
      { title: title, content: content },
      { new: true }
    );
    res.send(updateNote);
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteNotes(req, res) {
  const id = req.params.id;
  await noteModel.findOneAndDelete({ _id: id });
  res.status(200).send({ message: "Note deleted successfully" });
}

module.exports = {
  handleAllNotes,
  handleCreateNotes,
  handleEditNotes,
  handleDeleteNotes,
};
