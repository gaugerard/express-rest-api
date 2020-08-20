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
  const id = req.body.id;
  const pseudo = req.body.pseudo;
  const password = req.body.password;
  console.log(id, pseudo, password);

  if (!password || !password) {
    console.log("Request missing username or password param");
    return res.status(400).send("Request missing username or password param");
  }

  models.user
    .create({
      id: id,
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

module.exports = router;
