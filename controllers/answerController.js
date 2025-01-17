const AnswerModel = require("../models/answerModel");

const getAllAnswers = async (req, res) => {
  try {
    const answers = await AnswerModel.getAllAnswers();
    res.json(answers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching answers", error: error.message });
  }
};

const getAnswerById = async (req, res) => {
  try {
    const answer = await AnswerModel.getAnswerById(req.params.id);
    if (answer) {
      res.json(answer);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching answers", error: error.message });
  }
};

module.exports = { getAllAnswers, getAnswerById };
