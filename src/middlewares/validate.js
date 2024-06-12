const models = require('../../models');

const validateEntityExists = (model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const record = await model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${model.name} no encontrado/a` });
    }
    next();
  };
};

const validateFieldExists = (model, field) => {
  return async (req, res, next) => {
    const id = req.body[field];
    const record = await model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${model.name} con id ${id} no encontrado/a` });
    }
    next();
  };
};

const validateCarreraMateriasExists = async (req, res, next) => {
  const id_materia = req.body.idMateria;
  const id_carrera = req.body.idCarrera;
  const record = await models.Carrera_Materia.findOne({
    where: { idMateria: id_materia, idCarrera: id_carrera }
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
  validateSchema,
  validateFieldExists
};
