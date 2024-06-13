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
  const record_carrera = await models.Carrera.findByPk(id_carrera)
  const record_materia = await models.Materia.findByPk(id_materia)
  if (!record_carrera || !record_materia) {
    return res.status(404).json({ message: 'Asociación de carrera y materias no realizada' });
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

const validateNoAssociationExists = (model, entity, associatedField) => {
  return async (req, res, next) => { 
  const id = req.params.id;
  const record = await model.findByPk(id, {
    include: [{ model: entity, as: associatedField }]
  });
  if (record[associatedField].length > 0) {
    return res.status(400).json({ message: `No se puede eliminar la entidad ${model.name} porque tiene entidades ${entity.name} asociadas.`});
  }
  next();
  };
};

module.exports = {
  validateEntityExists,
  validateCarreraMateriasExists,
  validateSchema,
  validateFieldExists,
  validateNoAssociationExists
};
