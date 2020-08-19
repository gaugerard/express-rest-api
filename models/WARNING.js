/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WARNING', {
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
    sequelize,
    tableName: 'WARNING'
  });
};
