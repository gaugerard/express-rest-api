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
  const id = req.body.id;
  const server_name = req.body.server_name;
  const password = req.body.password;
  console.log(id, server_name, password);

  if (!id || !server_name || !password) {
    console.log("Request missing id | server_name | password param");
    return res
      .status(400)
      .send("Request missing id | server_name | password param");
  }

  models.wipe
    .create({
      id: id,
      server_name: server_name,
      password: password,
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
