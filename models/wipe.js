/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('wipe', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    server_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'wipe'
  });
};
