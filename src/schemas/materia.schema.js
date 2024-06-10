const Joi = require('joi');

const materiaSchema = Joi.object({
  nombre: Joi.string().min(3).max(50).required(),
  cuatrimestral: Joi.boolean().required(),
  anio: Joi.number().integer().min(1).required(),
  carreraId: Joi.number().integer().optional()
});

module.exports = materiaSchema;
