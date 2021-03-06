/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('WARNING', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    warning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'WARNING'
  });
};
