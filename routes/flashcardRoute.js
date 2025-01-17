const express = require("express");
const router = express.Router();
const {
  getAllFlashcard,
  getFlashcardById,
} = require("../controllers/flashcardController");

router.get("/flashcards", getAllFlashcard);
router.get("/flashcards/:id", getFlashcardById);

module.exports = router;
