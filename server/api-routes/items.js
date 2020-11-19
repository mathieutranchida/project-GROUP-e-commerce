//Data Imports
const items = require("../data/items.json");
const companies = require("../data/companies.json");
const { checkIfFound } = require("./routes-helpers");

//Get all items
const getAllItems = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: items });
  } catch {
    (err) => {
      res.status(200).json({ status: 200, error: err });
    };
  }
};

//Get item by id
const getItemById = (req, res) => {
  try {
    const itemFound = items.find(
      (element) => element._id === parseInt(req.params.id)
    );
    checkIfFound(itemFound, "Item");
    res.status(200).json({ status: 200, data: itemFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
};
