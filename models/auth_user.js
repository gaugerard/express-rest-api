/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('auth_user', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
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
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'user',
        },
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'auth_user'
  });
};
