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

const updateCarrera = async (req, res) =>{
  const id = req.params.id;
  const carreraDto = req.body;
  const carreraAModificar = await Carrera.findByPk(id);
  carreraAModificar.nombre = carreraDto.nombre;
  carreraAModificar.grado = carreraDto.grado;
  carreraAModificar.universidadAsociada = carreraDto.universidadAsociada;
  await carreraAModificar.save();
  res.status(201).json(carreraAModificar)
}

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  deleteCarrera,
  updateCarrera
};
