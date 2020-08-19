/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../env/database");

module.exports = function (sequelize, DataTypes) {
  return db.define(
    "messages",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      sender: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      receiver: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      tableName: "messages",
    }
  );
};
