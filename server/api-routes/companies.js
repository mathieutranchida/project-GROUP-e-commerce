//Data imoprts
const companies = require("../data/companies.json");
const { checkIfFound } = require("./routes-helpers");

//Get all companies
const getAllCompanies = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: companies });
  } catch (error) {
    res.status(500).json({ status: 500, error: error });
  }
};

//Get Company by ID
const getCompanyById = (req, res) => {
  try {
    const id = req.params.id;
    const companyFound = companies.find(
      (company) => company._id === parseInt(id)
    );
    console.log(companyFound);
    checkIfFound(companyFound, "Company");

    res.status(200).json({ status: 200, data: companyFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
};
