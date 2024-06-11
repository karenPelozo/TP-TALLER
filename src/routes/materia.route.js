const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/materia.controller');
const validate = require('../middlewares/validate');
const materiaSchema = require('../schemas/materia.schema');

router.get('/', MateriaController.getAllMaterias);
router.get('/:id', MateriaController.getMateriaById);
router.post('/', validate(materiaSchema), MateriaController.createMateria);
router.delete('/:id', MateriaController.deleteMateria);

module.exports = router;
