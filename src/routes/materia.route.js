const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/materia.controller');
const validate = require('../middlewares/validate');
const materiaSchema = require('../schemas/materia.schema');
const { Materia, Carrera } = require('../../models');

router.get('/', MateriaController.getAllMaterias);
router.get('/:id', validate.validateEntityExists(Materia), MateriaController.getMateriaById);
router.post('/', validate.validateSchema(materiaSchema), validate.validateFieldExists(Carrera, 'carreraId'),MateriaController.createMateria);
router.delete('/:id', validate.validateEntityExists(Materia), MateriaController.deleteMateria);

module.exports = router;
