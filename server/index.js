"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getAllItems, getItemById } = require("./api-routes/items");

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

  //Get all items
  .get("/items", (req, res) => getAllItems(req, res))

  //Get item by ID
  .get("/items/:id", (req, res) => getItemById(req, res))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
