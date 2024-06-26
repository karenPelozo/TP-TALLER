'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Universidad extends Model {
    static associate(models) {
      Universidad.hasMany(models.Carrera, { foreignKey: 'universidadAsociada' , as: 'carreras'});
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
