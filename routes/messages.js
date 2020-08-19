const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.messages
    .findAll()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
