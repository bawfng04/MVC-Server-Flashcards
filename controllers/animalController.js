const animalModel = require("../models/animalModel");
const AnimalModel = require("../models/animalModel");

const getAllAnimals = async (req, res) => {
  try {
    const animals = await animalModel.getAllAnimals();
    res.json(animals);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching answers", error: error.message });
  }
};

module.exports = { getAllAnimals };
