const express = require('express');
const router = express.Router();
const UniversidadController = require('../controllers/universidad.controller');
const validate = require('../middlewares/validate');
const universidadSchema = require('../schemas/universidad.schema');

router.get('/', UniversidadController.getAllUniversidades);
router.get('/:id', UniversidadController.getUniversidadById);
router.post('/', validate.validateSchema(universidadSchema), UniversidadController.createUniversidad);
router.delete('/:id', UniversidadController.deleteUniversidad);

module.exports = router;
