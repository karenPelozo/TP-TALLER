const Joi = require('joi');

const universidadSchema = Joi.object({
  nombre: Joi.string().required(),
  localidad: Joi.string().required()
});

module.exports = universidadSchema;
