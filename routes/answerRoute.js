// filepath: /d:/Projects/Server/routes/answerRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllAnswers,
  getAnswerById,
} = require("../controllers/answerController");

router.get("/answers", getAllAnswers);
router.get("/answers/:id", getAnswerById);

module.exports = router;
