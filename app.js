const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const answerRoutes = require("./routes/answerRoute");
const questionRoutes = require("./routes/questionRoute");
const flashcardRoute = require("./routes/flashcardRoute");
const animalRoutes = require("./routes/animalRoute");

app.use(cors());
app.use(express.json());
app.use("/", answerRoutes);
app.use("/", questionRoutes);
app.use("/", flashcardRoute);
app.use("/", animalRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Flashcard Server API");
});

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
  console.log(`${domain}/animals`);
  console.log("http://127.0.0.1:5500/flashcards.html");
  console.log("http://127.0.0.1:5500/animals.html");
});

const { poolPromise } = require("./database/database");
poolPromise.catch((err) => {
  console.error("Database connection failed:", err);
});

//npm start
//git push -u origin master

//deploy verce: vercel --prod