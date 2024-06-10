'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materia.belongsToMany(models.carreraId, { through: 'Carrera_Materia', foreignKey: 'idCarrera', as: 'carrera' });
    
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.BOOLEAN,
    anio: DataTypes.INTEGER,
    carreraId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};