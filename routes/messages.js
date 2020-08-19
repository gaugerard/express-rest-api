const express = require("express");
const router = express.Router();
const db = require("../env/database");
const models = require("../models/index");

router.get("/", (req, res) =>
  models.messages
    .findAll()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => console.log(err))
);

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  models.messages
    .findOne({
      where: { id: id },
    })
    .then(function (message) {
      res.send(message);
    });
});

router.post("/", (req, res) => {
  const id = req.body.id;
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const content = req.body.content;

  models.messages
    .create({
      id: id,
      sender: sender,
      receiver: receiver,
      content: content,
    })
    .then((newMessage) => {
      res.json(newMessage);
    });
});

module.exports = router;
