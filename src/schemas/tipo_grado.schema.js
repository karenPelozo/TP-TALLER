const Joi = require('joi');

const tipoGradoSchema = Joi.object({
  nivel: Joi.string().required()
});

module.exports = tipoGradoSchema;
