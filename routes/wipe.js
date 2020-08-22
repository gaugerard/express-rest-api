const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.wipe
    .findAll()
    .then((wipe) => {
      console.log("getting all wipe ...");
      res.send(wipe);
    })
    .catch((err) => console.log(err))
);

// get wipe from its unique id.
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  models.wipe
    .findOne({
      where: { id: id },
    })
    .then(function (wipe) {
      res.send(wipe);
    });
});

router.post("/", (req, res) => {
  console.log("creating wipe ...");
  const server_name = req.body.server_name;
  console.log(server_name);

  if (!server_name) {
    console.log("Request missing server_name param");
    return res
      .status(400)
      .send("Request missing server_name param");
  }

  models.wipe
    .create({
      server_name: server_name
    })
    .then((newWipe) => {
      res.json(newWipe);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

router.delete("/:id", (req, res) => {
  console.log("Deleting ...");
  const id = req.params.id;
  console.log(id);
  models.wipe
    .destroy({
      where: { id: id },
    })
    .then((newWipe) => {
      res.json(newWipe);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

module.exports = router;
