const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.message_chat
    .findAll()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => console.log(err))
);

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  models.message_chat
    .findOne({
      where: { id: id },
    })
    .then(function (message) {
      res.send(message);
    });
});

router.post("/", (req, res) => {
  const id = req.body.id;
  const content = req.body.content;
  const date = req.body.date;
  const user_src = req.body.user_src;

  models.message_chat
    .create({
      id: id,
      content: content,
      date: date,
      user_src: user_src,
    })
    .then((newMessage) => {
      res.json(newMessage);
    })
    .catch((err) => {
      console.log(err), res.sendStatus(400, err);
    });
});

module.exports = router;
