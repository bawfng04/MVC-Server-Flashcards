const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
} = require("../controllers/questionController");

router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById);

module.exports = router;
