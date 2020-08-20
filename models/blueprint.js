/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('blueprint', {
    wipe_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'wipe',
        },
        key: 'id'
      }
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'user',
        },
        key: 'id'
      }
    },
    stuff_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: {
          tableName: 'stuff',
        },
        key: 'name'
      }
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'blueprint'
  });
};
