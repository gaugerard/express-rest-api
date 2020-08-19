const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");
//const User = require("../models/users");

router.get("/", (req, res) =>
  models.users.findAll()
    .then((users) => {
      //console.log(typeof(users[0]));
      res.send(users);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
