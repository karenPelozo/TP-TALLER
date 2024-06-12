const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carrera.controller');
const validate = require('../middlewares/validate');
const carreraSchema = require('../schemas/carrera.schema');
const materiaSchema = require('../schemas/materia.schema');
const { Carrera, Tipo_Grado, Universidad } = require('../../models');

router.get('/', CarreraController.getAllCarreras);
router.get('/:id', validate.validateEntityExists(Carrera), CarreraController.getCarreraById);
router.post('/', validate.validateSchema(carreraSchema), validate.validateFieldExists(Tipo_Grado, 'grado'), validate.validateFieldExists(Universidad, 'universidadAsociada'), CarreraController.createCarrera);
router.delete('/:id', validate.validateEntityExists(Carrera), CarreraController.deleteCarrera);
router.post('/:id/materias', validate.validateEntityExists(Carrera), validate.validateSchema(materiaSchema), CarreraController.createMateriaInCarrera);
router.get('/:id/materias', validate.validateEntityExists(Carrera), CarreraController.getMateriasInCarrera);

module.exports = router;
