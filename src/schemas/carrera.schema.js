const Joi = require('joi');

const carreraSchema = Joi.object({
  nombre: Joi.string().min(3).max(50).required(),
  grado: Joi.number().integer().min(1).required(),
  universidadAsociada: Joi.number().integer().required()
});

module.exports = carreraSchema;
