const answers = require("../models/answerModel");
const { poolPromise, sql } = require("../database/database");

const getAllAnswers = (req, res) => {
  const query = "SELECT * FROM answers";
  poolPromise
    .then((pool) => pool.request().query(query))
    .then((result) => res.json(result.recordset))
    .catch((err) =>
      res.status(500).send("Database query failed! Error: " + err)
    );
};

const getAnswerById = (req, res) => {
  const answer = answers.find((a) => a.id === parseInt(req.params.id));
  if (!answer)
    return res.status(404).send("The answer with the given ID was not found.");
  res.send(answer);
};

const postAnswerById = (req, res) => {
  const answer = answers.find((a) => a.id === parseInt(req.params.id));
  if (!answer)
    return res.status(404).send("The answer with the given ID was not found.");

  const isCorrect = req.body.answer === "A"; // Example logic
  res.send({ isCorrect });
};

module.exports = {
  getAnswerById,
  postAnswerById,
  getAllAnswers,
};
