/* jshint indent: 2 */
const db = require("../env/database");

module.exports = function(sequelize, DataTypes) {
  return db.define('wipe_chat', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    msg_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'message_chat',
        },
        key: 'id'
      }
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
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'wipe_chat'
  });
};
