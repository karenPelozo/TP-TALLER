const { Materia, Carrera_Materia } = require('../../models');

const getAllMaterias = async (req, res) => {
  const materias = await Materia.findAll({
    include: [
      { Model: Carrera, as : "carreras" }
    ]
  });
  res.status(200).json(materias);
};

const getMateriaById = async (req, res) => {
  const { id } = req.params;
  const materia = await Materia.findByPk(id);
  res.status(200).json(materia);
};

const createMateria = async (req, res) => {
  const { nombre, cuatrimestral, anio, carreraId } = req.body;
  const materia = await Materia.create({ nombre, cuatrimestral, anio });
  await Carrera_Materia.create({ idCarrera: carreraId, idMateria: materia.id });
  res.status(201).json(materia);
};

const deleteMateria = async (req, res) => {
  const { id } = req.params;
  const materia = await Materia.findByPk(id);
  await materia.destroy();
  res.status(200).json({ message: 'Materia eliminada' });
};

module.exports = {
  getAllMaterias,
  getMateriaById,
  createMateria,
  deleteMateria
};
