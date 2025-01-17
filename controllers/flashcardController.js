const FlashcardModel = require("../models/flashcardModel");

const getAllFlashcard = async (req, res) => {
  try {
    const result = await FlashcardModel.getAllFlashcard();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "error getting flashcard from database",
      error: error.message,
    });
  }
};

const getFlashcardById = async (req, res) => {
  try {
    const result = await FlashcardModel.getFlashcardById(req.params.id);
    if (result) {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({
      message: "error getting flashcard from database",
      error: error.message,
    });
  }
};

module.exports = {
  getAllFlashcard,
  getFlashcardById,
};
