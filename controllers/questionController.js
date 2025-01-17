const QuestionModel = require("../models/questionModel");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.getAllQuestions();
    res.json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching questions", error: error.message });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await QuestionModel.getQuestionById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(question);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching question", error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionById,
};
