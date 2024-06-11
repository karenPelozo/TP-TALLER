const Joi = require('joi');

const carreraMateriaSchema = Joi.object({
    idCarrera: Joi.number().integer().min(1).required(),
    idMateria: Joi.number().integer().min(1).required()
});

module.exports = carreraMateriaSchema;
