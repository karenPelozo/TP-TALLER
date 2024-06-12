'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tipo_Grado extends Model {
    static associate(models) {
      Tipo_Grado.hasMany(models.Carrera, { foreignKey: 'grado', as: 'grados' });
    }
  }

  Tipo_Grado.init({
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo_Grado',
  });

  return Tipo_Grado;
};
