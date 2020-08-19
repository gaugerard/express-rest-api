/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../env/database");

module.exports = function (sequelize, DataTypes) {
  return db.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      sequelize,
      tableName: "users",
    }
  );
};
