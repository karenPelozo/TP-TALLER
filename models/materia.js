'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.belongsToMany(models.Carrera, { through: 'Carrera_Materia', foreignKey: 'idMateria', as: 'carreras' });
    }
  }

  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.BOOLEAN,
    anio: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Materia',
  });

  return Materia;
};
