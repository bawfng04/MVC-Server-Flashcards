// filepath: /d:/Projects/Server/routes/answerRoutes.js
const express = require("express");
const router = express.Router();
const { getAllAnimals } = require("../controllers/animalController");

router.get("/animals", getAllAnimals);

module.exports = router;
