const answers = require("../models/answerModel");

const getAnswerById = (req, res) => {
  const answer = answers.find((a) => a.id === parseInt(req.params.id));
  if (!answer)
    return res.status(404).send("The answer with the given ID was not found.");
  res.send(answer);
};

const getAllAnswers = (req, res) => {
  res.send(answers);
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
