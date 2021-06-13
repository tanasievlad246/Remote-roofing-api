'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Session.init({
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Session',
  });
  return Session;
};