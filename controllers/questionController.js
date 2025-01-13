const questions = require("../models/questionModel");

const getAllQuestions = (req, res) => {
  res.send(questions);
};

const getQuestionById = (req, res) => {
  const selectedQuestion = questions.find(
    (question) => question.id === req.params.id
  );
  if (!selectedQuestion) {
    return res
      .status(404)
      .send("The question with the given ID was not found.");
  }
  res.send(selectedQuestion);
};

const deleteQuestionById = (req, res) => {
  const selectedQuestion = questions.find(
    (question) => question.id === req.params.id
  );
  if (!selectedQuestion) {
    return res
      .status(404)
      .send("The question with the given ID was not found.");
  }
  const index = questions.indexOf(selectedQuestion);
  questions.splice(index, 1);
  res.send(selectedQuestion);
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  deleteQuestionById,
};
