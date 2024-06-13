const { Materia, Carrera_Materia, Carrera } = require('../../models');

const getAllMaterias = async (req, res) => {
  const materias = await Materia.findAll({
    include: [
      { model: Carrera, as : "carreras" }
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

const updateMateria = async (req, res) =>{
  const id = req.params.id;
  const materiaDto = req.body;
  const materiaAModificar = await Materia.findByPk(id);
  materiaAModificar.nombre = materiaDto.nombre;
  materiaAModificar.cuatrimestral = materiaDto.cuatrimestral;
  materiaAModificar.anio = materiaDto.anio;
  await materiaAModificar.save();
  res.status(201).json(materiaAModificar)
}

module.exports = {
  getAllMaterias,
  getMateriaById,
  createMateria,
  deleteMateria,
  updateMateria
};
