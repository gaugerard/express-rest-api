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

// get all wipes from a user id.
router.get("/from_user_id/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  models.auth_user
    .findAll({
      where: { user_id: user_id },
    })
    .then(function (auth_user) {
      
      const l_wipe_id = [];
      for (var i = 0; i < auth_user.length; i++) {
        const wipe_id = auth_user[i].wipe_id;
        l_wipe_id.push(wipe_id);
        //l_msg_id.push(l_msg_id[wipe_chat[i].msg_id])
      }
      console.log(l_wipe_id);

      models.wipe
        .findAll({
          where: { id: l_wipe_id },
          order: [["server_name", "ASC"]],
        })
        .then(function (rep) {
          console.log(rep);
          res.send(rep);
        });
    });
});

router.post("/", (req, res) => {
  console.log("creating wipe ...");
  const server_name = req.body.server_name;
  console.log(server_name);

  if (!server_name) {
    console.log("Request missing server_name param");
    return res.status(400).send("Request missing server_name param");
  }

  models.wipe
    .create({
      server_name: server_name,
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
