const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.wipe_chat
    .findAll()
    .then((wipe_chat) => {
      console.log("getting all wipe_chat ...");
      res.send(wipe_chat);
    })
    .catch((err) => console.log(err))
);

router.get("/:wipe_id", (req, res) => {
  const wipe_id = req.params.wipe_id;
  console.log(wipe_id);
  models.wipe_chat
    .findAll({
      where: { wipe_id: wipe_id },
    })
    .then(function (wipe_chat) {
      res.send(wipe_chat);
    });
});

router.post("/", (req, res) => {
    console.log("creating wipe_chat ...");
    //const id = req.body.id;
    const msg_id = req.body.msg_id;
    const wipe_id = req.body.wipe_id;
    console.log(msg_id, wipe_id);
  
    if (!msg_id || !wipe_id) {
      console.log("Request missing msg_id | wipe_id param");
      return res
        .status(400)
        .send("Request missing msg_id | wipe_id param");
    }
  
    models.wipe_chat
      .create({
        msg_id: msg_id,
        wipe_id: wipe_id,
      })
      .then((newWipechat) => {
        res.json(newWipechat);
      })
      .catch((err) => {
        console.log(err), res.sendStatus(400, err);
      });
  });

module.exports = router;
