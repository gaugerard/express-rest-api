const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");
//const User = require("../models/users");

router.get("/", (req, res) =>
  models.users
    .findAll()
    .then((users) => {
      //console.log(typeof(users[0]));
      res.send(users);
    })
    .catch((err) => console.log(err))
);

router.post("/", (req, res) => {
  const firstname = req.body.username;
  const name = req.body.password;

  if (!firstname || !name) {
    return res.status(400).send("Request missing username or password param");
  }

  models.users
    .findOne({
      where: { firstname: firstname, name: name },
    })
    .then(function (user) {
      if (user) {
        res.send(user);
      } else {
        res.send(user);
      }
    });
});

module.exports = router;
