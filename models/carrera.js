'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    static associate(models) {
      Carrera.belongsToMany(models.Materia, { through: 'Carrera_Materia', foreignKey: 'idCarrera', as: 'materias' });
      Carrera.belongsTo(models.Tipo_Grado, { foreignKey: 'grado', as: 'tipoGrado' });
      Carrera.belongsTo(models.Universidad, { foreignKey: 'universidadAsociada', as: 'universidadRelacionada' });
    }
  }

  Carrera.init({
    nombre: DataTypes.STRING,
    grado: DataTypes.INTEGER,
    universidadAsociada: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Universidads',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Carrera',
  });

  return Carrera;
};
