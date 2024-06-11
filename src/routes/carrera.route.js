const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carrera.controller');
const validate = require('../middlewares/validate');
const carreraSchema = require('../schemas/carrera.schema');
const materiaSchema = require('../schemas/materia.schema');

router.get('/', CarreraController.getAllCarreras);
router.get('/:id', CarreraController.getCarreraById);
router.post('/', validate(carreraSchema), CarreraController.createCarrera);
router.delete('/:id', CarreraController.deleteCarrera);
router.post('/:id/materias', validate(materiaSchema), CarreraController.createMateriaInCarrera);
router.get('/:id/materias', CarreraController.getMateriasInCarrera);

module.exports = router;
