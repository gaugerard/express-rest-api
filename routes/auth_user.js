const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.auth_user
    .findAll()
    .then((auth_user) => {
      console.log("getting all auth_user ...");
      res.send(auth_user);
    })
    .catch((err) => console.log(err))
);

router.get("/:wipe_id", (req, res) => {
  const wipe_id = req.params.wipe_id;
  console.log(wipe_id);
  models.auth_user
    .findAll({
      where: { wipe_id: wipe_id },
    })
    .then(function (auth_user) {
      res.send(auth_user);
    });
});

router.post("/", (req, res) => {
  const id = req.body.id;
  const wipe_id = req.body.wipe_id;
  const user_id = req.body.user_id;
  console.log(wipe_id, user_id);

  if (!id || !wipe_id || !user_id) {
    console.log("Request wipe_id id | user_id param");
    return res.status(400).send("Request wipe_id id | user_id param");
  }

  models.auth_user
    .create({
      id: id,
      wipe_id: wipe_id,
      user_id: user_id,
    })
    .then((newAuth_user) => {
      res.json(newAuth_user);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

router.delete("/:user_id", (req, res) => {
  console.log("Deleting auth to user...");
  const user_id = req.params.user_id;
  console.log(user_id);
  models.auth_user
    .destroy({
      where: { user_id: user_id },
    })
    .then((newAuth_user) => {
      res.json(newAuth_user);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

module.exports = router;
