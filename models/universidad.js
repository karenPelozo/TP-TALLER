'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Universidad extends Model {
    static associate(models) {
      // define association here
    }
  }
  Universidad.init({
    nombre: DataTypes.STRING,
    localidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Universidad',
  });
  return Universidad;
};