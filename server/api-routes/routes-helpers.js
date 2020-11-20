//Data imports
const items = require("../data/items.json");

//Error simulation constants
const MAX_DELAY = 2000;
const FAILURE_ODDS = 1;

// - Add an arbitrary delay of 0-2 seconds
// - Add a 5% chance of a 500 error
const simulateProblems = (res) => {
  const delay = Math.random() * MAX_DELAY;

  setTimeout(() => {
    const shouldError = Math.random() <= FAILURE_ODDS;

    if (shouldError) {
      res.sendStatus(500);
      return;
    }
  }, delay);
};

//Check if element found, otherwise throw error
const checkIfFound = (element, name) => {
  if (!element) {
    throw new Error(`${name} not found.`);
  }
  return true;
};

//Decrement quantity of purchased items in the database
const decrementQuantity = (order) => {
  //Loop through all purchased items
  order.items.forEach((item) => {
    const itemId = item._id;
    const itemToDecrementIndex = items.findIndex((element) => {
      console.log("ELEMENT: " + element._id);
      console.log("ITEM:  " + itemId);
      return element._id === itemId;
    });
    items[itemToDecrementIndex].numInStock -= item.quantity;
  });
};

module.exports = {
  simulateProblems,
  checkIfFound,
  decrementQuantity,
};
