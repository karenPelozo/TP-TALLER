'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class universidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrera.belongsToMany(models.Materia, { through: 'Carrera_Materia', foreignKey: 'idCarrera', as: 'materias' });
      Carrera.belongsTo(models.Tipo_Grado, { foreignKey: 'grado', as: 'tipoGrado' });
    }
  }
  universidad.init({
    nombre: DataTypes.STRING,
    localidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'universidad',
  });
  return universidad;
};