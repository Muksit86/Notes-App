const express = require("express");
const app = express();
const cors = require("cors");

const noteRouter = require("./routes/notes.route");

app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRouter);

//Port connection
app.listen(8000, () => {
  console.log("PORT 8000");
});
