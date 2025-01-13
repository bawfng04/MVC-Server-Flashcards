// filepath: /d:/Projects/Server/routes/answerRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAnswerById,
  postAnswerById,
  getAllAnswers,
} = require("../controllers/answerController");

router.get("/answers", getAllAnswers);
router.get("/answers/:id", getAnswerById);
router.post("/answers/:id", postAnswerById);

module.exports = router;
