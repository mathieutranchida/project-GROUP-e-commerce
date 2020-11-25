//Data Imports
const accounts = require("../data/authentication.json");
const { checkIfFound } = require("./routes-helpers");

//Get all accounts
const getAllAccounts = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: accounts });
  } catch (error) {
    res.status(200).json({ status: 200, error: error.message });
  }
};

//Get account by email
const getAccountByEmail = (req, res) => {
  try {
    const accountFound = accounts.find(
      (element) => element.email === req.params.email
    );
    let isFound = checkIfFound(accountFound, "Account");
    console.log(isFound);
    res.status(200).json({ status: 200, data: accountFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

//Create account
const createAccount = (req, res) => {
  try {
    const account = req.body;
    accounts.push(account);
    res.status(200).json({ status: 200, data: account });
  } catch (error) {
    res.status(500).json({ status: 200, error: error.message });
  }
};

module.exports = {
  getAllAccounts,
  getAccountByEmail,
  createAccount,
};
