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

const deleteQuestionById = async (req, res) => {
  try {
    const result = await QuestionModel.deleteQuestion(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting question", error: error.message });
  }
};

const createQuestion = async (req, res) => {
  try {
    const newQuestion = await QuestionModel.createQuestion(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating question", error: error.message });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const updated = await QuestionModel.updateQuestion(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating question", error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  deleteQuestionById,
  createQuestion,
  updateQuestion,
};
