const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carrera.controller');
const validate = require('../middlewares/validate');
const carreraSchema = require('../schemas/carrera.schema');
const { Carrera, Tipo_Grado, Universidad, Materia } = require('../../models');

router.get('/', CarreraController.getAllCarreras);
router.get('/:id', validate.validateEntityExists(Carrera), CarreraController.getCarreraById);
router.post('/', validate.validateSchema(carreraSchema), validate.validateFieldExists(Tipo_Grado, 'grado'), validate.validateFieldExists(Universidad, 'universidadAsociada'), CarreraController.createCarrera);
router.delete('/:id', validate.validateEntityExists(Carrera), validate.validateNoAssociationExists(Carrera, Materia, 'materias'), CarreraController.deleteCarrera);
router.put('/:id', validate.validateEntityExists(Carrera), validate.validateSchema(carreraSchema), validate.validateFieldExists(Tipo_Grado, 'grado'), validate.validateFieldExists(Universidad, 'universidadAsociada'), CarreraController.updateCarrera)

module.exports = router;
