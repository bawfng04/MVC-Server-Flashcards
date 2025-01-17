const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const answerRoutes = require("./routes/answerRoute");
const questionRoutes = require("./routes/questionRoute");
const flashcardRoute = require("./routes/flashcardRoute");

app.use(cors());
app.use(express.json());
app.use("/", answerRoutes);
app.use("/", questionRoutes);
app.use("/", flashcardRoute);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




//npm start
//git push -u origin master