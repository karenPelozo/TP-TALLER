const { Carrera, Materia, Tipo_Grado, Universidad } = require('../../models');

const getAllCarreras = async (req, res) => {
  const carreras = await Carrera.findAll({
    include: [
      { model: Materia, as: 'materias' },
      { model: Tipo_Grado, as: 'tipoGrado' },
      { model: Universidad, as: 'universidadRelacionada' }
    ]
  });
  res.status(200).json(carreras);
};

const getCarreraById = async (req, res) => {
  const id = req.params.id;
  const carrera = await Carrera.findByPk(id, {
    include: [
      { model: Materia, as: 'materias' },
      { model: Tipo_Grado, as: 'tipoGrado' },
      { model: Universidad, as: 'universidadRelacionada' }
    ]
  });
  res.status(200).json(carrera);
};

const createCarrera = async (req, res) => {
  const { nombre, grado, universidadAsociada } = req.body;
  const carrera = await Carrera.create({ nombre, grado, universidadAsociada });
  res.status(201).json(carrera);
};

const deleteCarrera = async (req, res) => {
  const id = req.params.id;
  const carrera = await Carrera.findByPk(id);
  await carrera.destroy();
  res.status(200).json({ message: 'Carrera eliminada' });
};

const createMateriaInCarrera = async (req, res) => {
  const id = req.params.id;
  const { nombre, cuatrimestral, anio } = req.body;
  const carrera = await Carrera.findByPk(id);
  const materia = await Materia.create({ nombre, cuatrimestral, anio });
  await carrera.addMateria(materia);
  res.status(201).json(materia);
};

const getMateriasInCarrera = async (req, res) => {
  const id = req.params.id;
  const carrera = await Carrera.findByPk(id, {
    include: { model: Materia, as: 'materias' }
  });
  res.status(200).json(carrera.materias);
};

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  deleteCarrera,
  createMateriaInCarrera,
  getMateriasInCarrera
};
