"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  skills.init(
    {
      preferred_programming_language: DataTypes.STRING,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Skills",
    }
  );
  return skills;
};
