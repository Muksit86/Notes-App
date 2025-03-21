const mongoose = require("mongoose");
require("dotenv").config();

mongodb_url = process.env.VITE_MONGODB_URL;
mongoose
  .connect(mongodb_url)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
  },
});
const noteModel = mongoose.model("Note", noteSchema);

module.exports = noteModel;
