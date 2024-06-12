const express = require('express');
const router = express.Router();
const UniversidadController = require('../controllers/universidad.controller');
const validate = require('../middlewares/validate');
const universidadSchema = require('../schemas/universidad.schema');
const { Universidad } = require('../../models')

router.get('/', UniversidadController.getAllUniversidades);
router.get('/:id', validate.validateEntityExists(Universidad), UniversidadController.getUniversidadById);
router.post('/', validate.validateSchema(universidadSchema), UniversidadController.createUniversidad);
router.delete('/:id', validate.validateEntityExists(Universidad), UniversidadController.deleteUniversidad);

module.exports = router;
