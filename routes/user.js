const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.user
    .findAll()
    .then((user) => {
      console.log("getting all users ...");
      res.send(user);
    })
    .catch((err) => console.log(err))
);

router.post("/", (req, res) => {
  console.log("creating user ...");
  const pseudo = req.body.pseudo;
  const password = req.body.password;
  console.log(pseudo, password);

  if (!pseudo || !password) {
    console.log("Request missing username or password param");
    return res.status(400).send("Request missing username or password param");
  }

  models.user
    .create({
      pseudo: pseudo,
      password: password,
    })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

// Used during Login.
router.post("/login", (req, res) => {
  const firstname = req.body.username;
  const password = req.body.password;

  if (!firstname || !password) {
    return res.status(400).send("Request missing username or password param");
  }

  models.user
    .findOne({
      where: { pseudo: firstname, password: password },
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
