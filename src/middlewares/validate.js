const models = require('../../models');
const Joi = require('joi');

const validateEntityExists = (entity) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const model = models[entity];
    const record = await model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${entity} no encontrado/a` });
    }
    next();
  };
};

const validateCarreraMateriasExists = async (req, res, next) => {
  const { id_materia, id_carrera } = req.params;
  const record = await models.CarreraMaterias.findOne({
    where: { id_materia, id_carrera }
  });
  if (!record) {
    return res.status(404).json({ message: 'Asociación de carrera y materias no encontrada' });
  }
  next();
};

const validateSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

module.exports = {
  validateEntityExists,
  validateCarreraMateriasExists,
  validateSchema
};
