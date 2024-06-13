const express = require('express');
const router = express.Router();
const CarreraMateriaController = require('../controllers/carrera_materia.controller');
const validate = require('../middlewares/validate');
const carreraMateriaSchema = require('../schemas/carrera_materia.schema');

router.get('/', CarreraMateriaController.getAsociations)
router.post('/', validate.validateSchema(carreraMateriaSchema), validate.validateCarreraMateriasExists, CarreraMateriaController.createCarreraMateria);

module.exports = router;
