const Sequelize = require("sequelize");
module.exports = new Sequelize("rustinerie", "root", "password", {
  host: "vps-538b1440.vps.ovh.net",
  dialect: "mysql",
});
