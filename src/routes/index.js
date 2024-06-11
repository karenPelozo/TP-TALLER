const express = require('express');
const router = express.Router();

const carreraRoutes = require('./carrera.route');
const materiaRoutes = require('./materia.route');
const tipoGradoRoutes = require('./tipo_grado.route');
const universidadRoutes = require('./universidad.route');

router.use('/carreras', carreraRoutes);
router.use('/materias', materiaRoutes);
router.use('/tipo-grados', tipoGradoRoutes);
router.use('/universidades', universidadRoutes);

module.exports = router;
