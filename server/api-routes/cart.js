// Data import
const cart = require("../data/cart.json");
const {
  incrementCart,
  toggleQuantity,
} = require("../api-routes/routes-helpers");

// Get the cart
const getCart = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: cart });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Add item to cart
const addItemToCart = (req, res) => {
  try {
    const item = req.body;
    console.log(item);
    incrementCart(item);
    res.status(200).json({ status: 200, data: item });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

//Modify cart quantity
const modifyCartQuantity = (req, res) => {
  try {
    const itemId = req.body.id;
    const quantity = req.body.quantity;
    console.log(quantity);
    toggleQuantity(itemId, quantity);
    res
      .status(200)
      .json({ status: 200, data: { id: itemId, quantity: quantity } });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getCart,
  addItemToCart,
  modifyCartQuantity,
};
