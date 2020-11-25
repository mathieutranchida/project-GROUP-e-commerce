const orders = require("../data/orders.json");

const { decrementQuantity, checkIfFound } = require("./routes-helpers");

//Create an order
const createOrder = (req, res) => {
  try {
    const order = req.body;
    console.log(order);
    decrementQuantity(order);
    orders.push(order);
    res.status(200).json({ status: 200, data: order });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

//Get all orders
const getAllOrders = (req, res) => {
  try {
    console.log(orders);
    res.status(200).json({ status: 200, data: orders });
  } catch (error) {
    res.status(500).json({ status: 200, error: error.message });
  }
};

//Get order by id
const getOrderById = (req, res) => {
  try {
    const orderFound = orders.find((order) => order._id === req.params.id);
    checkIfFound(orderFound, "Order");
    res.status(200).json({ status: 200, data: orderFound });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
};
