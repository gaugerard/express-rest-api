const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.blueprint
    .findAll()
    .then((blueprint) => {
      console.log("getting all blueprint ...");
      res.send(blueprint);
    })
    .catch((err) => console.log(err))
);

//get blueprint by wipe_id
router.get("/:wipe_id", (req, res) => {
  const wipe_id = req.params.wipe_id;
  models.blueprint
    .findAll({
      where: { wipe_id: wipe_id },
    })
    .then((blueprint) => {
      console.log("getting blueprint for wipe ...");
      res.send(blueprint);
    })
    .catch((err) => console.log(err));
});


router.post("/", (req, res) => {
  const wipe_id = req.body.wipe_id;
  const user_id = req.body.user_id;
  const stuff_name = req.body.stuff_name;

  models.blueprint
    .create({
      wipe_id: wipe_id,
      user_id: user_id,
      stuff_name: stuff_name,
    })
    .then((newBP) => {
      res.json(newBP);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

router.delete("/:id", (req, res) => {
  console.log("Deleting ...");
  const id = req.params.id;
  console.log(id);
  models.blueprint
    .destroy({
      where: { id: id },
    })
    .then((newBP) => {
      res.json(newBP);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

module.exports = router;
