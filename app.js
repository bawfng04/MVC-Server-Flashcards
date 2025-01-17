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

const domain = `localhost:${port}`;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("routes: ");
  console.log(`${domain}/questions`);
  console.log(`${domain}/questions/{id}`);
  console.log(`${domain}/answers`);
  console.log(`${domain}/answers/{id}`);
  console.log(`${domain}/flashcards`);
  console.log(`${domain}/flashcards/{id}`);
  console.log("http://127.0.0.1:5500/index.html");
});




//npm start
//git push -u origin master