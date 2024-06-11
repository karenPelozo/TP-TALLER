const Joi = require('joi');

const materiaSchema = Joi.object({
  nombre: Joi.string().required(),
  cuatrimestral: Joi.boolean().required(),
  anio: Joi.number().integer().required(),
  carreraId: Joi.number().integer().optional()
});

module.exports = materiaSchema;
