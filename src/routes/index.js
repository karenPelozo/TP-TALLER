const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carrera.controller');
const validate = require('../middlewares/validate');
const carreraSchema = require('../schemas/carrera.schema');
const materiaSchema = require('../schemas/materia.schema');

router.get('/carreras', CarreraController.getAllCarreras);
router.get('/carreras/:id', CarreraController.getCarreraById);
router.post('/carreras', validate(carreraSchema), CarreraController.createCarrera);
router.delete('/carreras/:id', CarreraController.deleteCarrera);
router.post('/carreras/:id/materias', validate(materiaSchema), CarreraController.createMateriaInCarrera);
router.get('/carreras/:id/materias', CarreraController.getMateriasInCarrera);

module.exports = router;
