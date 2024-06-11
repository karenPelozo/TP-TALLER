const express = require('express');
const router = express.Router();
const TipoGradoController = require('../controllers/tipo_grado.controller');
const validate = require('../middlewares/validate');
const tipoGradoSchema = require('../schemas/tipo_grado.schema');

router.get('/', TipoGradoController.getAllTipoGrados);
router.get('/:id', TipoGradoController.getTipoGradoById);
router.post('/', validate(tipoGradoSchema), TipoGradoController.createTipoGrado);
router.delete('/:id', TipoGradoController.deleteTipoGrado);

module.exports = router;
