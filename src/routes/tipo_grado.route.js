const express = require('express');
const router = express.Router();
const TipoGradoController = require('../controllers/tipo_grado.controller');
const validate = require('../middlewares/validate');
const tipoGradoSchema = require('../schemas/tipo_grado.schema');
const { Tipo_Grado } = require('../../models')

router.get('/', TipoGradoController.getAllTipoGrados);
router.get('/:id', validate.validateEntityExists(Tipo_Grado), TipoGradoController.getTipoGradoById);
router.post('/', validate.validateSchema(tipoGradoSchema), TipoGradoController.createTipoGrado);
router.delete('/:id', validate.validateEntityExists(Tipo_Grado), TipoGradoController.deleteTipoGrado);

module.exports = router;
