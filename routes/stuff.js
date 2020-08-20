const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.stuff
    .findAll()
    .then((stuff) => {
      console.log("getting all stuff ...");
      res.send(stuff);
    })
    .catch((err) => console.log(err))
);

router.post("/", (req, res) => {
  console.log("creating stuff ...");
  const name = req.body.name;
  console.log(name);

  if (!name) {
    console.log("Request missing name param");
    return res.status(400).send("Request missing name param");
  }

  models.stuff
    .create({
      name: name,
    })
    .then((newStuff) => {
      res.json(newStuff);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

module.exports = router;
