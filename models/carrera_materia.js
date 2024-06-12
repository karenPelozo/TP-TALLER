'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera_Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Carrera_Materia.init({
    idCarrera: DataTypes.INTEGER,
    idMateria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrera_Materia',
  });
  return Carrera_Materia;
};