const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  deleteQuestionById,
} = require("../controllers/questionController");

router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById);
router.delete("/questions/:id", deleteQuestionById);

module.exports = router;
