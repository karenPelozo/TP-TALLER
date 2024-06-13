const express = require('express');
const router = express.Router();
const UniversidadController = require('../controllers/universidad.controller');
const validate = require('../middlewares/validate');
const universidadSchema = require('../schemas/universidad.schema');
const { Universidad, Carrera } = require('../../models')

router.get('/', UniversidadController.getAllUniversidades);
router.get('/:id', validate.validateEntityExists(Universidad), UniversidadController.getUniversidadById);
router.post('/', validate.validateSchema(universidadSchema), UniversidadController.createUniversidad);
router.delete('/:id', validate.validateEntityExists(Universidad), validate.validateNoAssociationExists(Universidad, Carrera, 'carreras'), UniversidadController.deleteUniversidad);
router.put('/:id', validate.validateEntityExists(Universidad), validate.validateSchema(universidadSchema), UniversidadController.updateUniversidad)

module.exports = router;
