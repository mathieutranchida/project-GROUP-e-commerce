//Data imports
const items = require("../data/items.json");
const cart = require("../data/cart.json");

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

//Increment number of items in cart
const incrementCart = (item) => {
  //Check if item is already in cart. If yes, increment its quantity, otherwise add new item to cart
  const itemFound = cart.items.find((itemObj) => itemObj.item._id === item._id);
  if (itemFound) {
    cart.items.forEach((itemObj, index) => {
      if (itemFound._id === itemObj._id) {
        cart.items[index] = {
          ...cart.items[index],
          quantity: (cart.items[index].quantity += 1),
        };
        cart.number_of_items += 1;
        const totalPrice = parseFloat(item.price.substring(1));
        cart.total_price += totalPrice;
      }
    });
  } else {
    cart.items.push({ item: item, quantity: 1 });
    cart.number_of_items += 1;
    const totalPrice = parseFloat(item.price.substring(1));
    cart.total_price += totalPrice;
  }
};

module.exports = {
  simulateProblems,
  checkIfFound,
  decrementQuantity,
  incrementCart,
};
