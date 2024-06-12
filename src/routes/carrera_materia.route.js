const express = require('express');
const router = express.Router();
const CarreraMateriaController = require('../controllers/carrera_materia.controller');
const validate = require('../middlewares/validate');
const carreraMateriaSchema = require('../schemas/carrera_materia.schema');

router.post('/', validate.validateSchema(carreraMateriaSchema), CarreraMateriaController.createCarreraMateria);
router.delete('/:idCarrera/:idMateria', CarreraMateriaController.deleteCarreraMateria);

module.exports = router;
