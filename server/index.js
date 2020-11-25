"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//API methods imports
const { getAllItems, getItemById } = require("./api-routes/items");
const { getAllCompanies, getCompanyById } = require("./api-routes/companies");
const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require("./api-routes/orders");
const {
  getCart,
  addItemToCart,
  modifyCartQuantity,
  deleteItem,
} = require("./api-routes/cart");
const {
  getAllAccounts,
  getAccountByEmail,
  createAccount,
} = require("./api-routes/authentication");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints

  //HOME
  .get("/", (req, res) =>
    res
      .status(200)
      .json({ status: 200, message: "Server is running on port 4000" })
  )

  //ITEMS ROUTES --------------------------------
  //Get all items
  .get("/items", (req, res) => getAllItems(req, res))

  //Get item by ID
  .get("/items/:id", (req, res) => getItemById(req, res))
  //---------------------------------------------

  //COMPANIES ROUTES --------------------------------
  //Get all companies
  .get("/companies", (req, res) => getAllCompanies(req, res))

  //Get company by ID
  .get("/companies/:id", (req, res) => getCompanyById(req, res))
  //-------------------------------------------------

  //ORDERS ROUTES -----------------------------------
  //Create Order
  .post("/orders", (req, res) => createOrder(req, res))

  //Get all orders
  .get("/orders", (req, res) => getAllOrders(req, res))

  //Get order by id
  .get("/orders/:id", (req, res) => getOrderById(req, res))

  //CART ROUTES
  //Get cart by customer name
  .get("/cart", (req, res) => getCart(req, res))

  //Add item to cart
  .post("/cart", (req, res) => addItemToCart(req, res))

  //Patch (modify) cart
  .patch("/cart", (req, res) => {
    modifyCartQuantity(req, res);
  })

  //Delete cart item
  .delete("/cart", (req, res) => deleteItem(req, res))

  //ACCOUNTS ROUTES --------------------------------------
  //Get all accounts
  .get("/accounts", (req, res) => getAllAccounts(req, res))

  //Get account by email
  .get("/account/:email", (req, res) => getAccountByEmail(req, res))

  //Create an account
  .post("/account", (req, res) => createAccount(req, res))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
