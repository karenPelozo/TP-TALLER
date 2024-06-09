'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_Grado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tipo_Grado.hasMany(models.Carrera, { foreignKey: 'grado', as: 'carreras' });
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
