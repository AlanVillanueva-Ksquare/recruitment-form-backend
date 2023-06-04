"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bankaccountinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bankaccountinfo.init(
    {
      acc_number: DataTypes.NUMBER,
      clabe: DataTypes.NUMBER,
      bank: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BankAccountInfo",
    }
  );
  return bankaccountinfo;
};
