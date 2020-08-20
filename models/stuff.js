/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('stuff', {
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'stuff'
  });
};
