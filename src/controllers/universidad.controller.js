const { Universidad, Carrera } = require('../../models');

const getAllUniversidades = async (req, res) => {
  const universidades = await Universidad.findAll({
    include: [
      { model: Carrera, as: 'carreras' }
    ]
  });
  res.status(200).json(universidades);
};

const getUniversidadById = async (req, res) => {
  const id = req.params.id;
  const universidad = await Universidad.findByPk(id, {
    include: [
      { model: Carrera, as: 'carreras' }
    ]
  });
  res.status(200).json(universidad);
};

const createUniversidad = async (req, res) => {
  const { nombre, localidad } = req.body;
  const universidad = await Universidad.create({ nombre, localidad });
  res.status(201).json(universidad);
};

const deleteUniversidad = async (req, res) => {
  const id = req.params.id;
  const universidad = await Universidad.findByPk(id);
  await universidad.destroy();
  res.status(200).json({ message: 'Universidad eliminada' });
};

const updateUniversidad = async (req, res) =>{
  const id = req.params.id;
  const universidadDto = req.body;
  const universidadAModificar = await Universidad.findByPk(id);
  universidadAModificar.nombre = universidadDto.nombre;
  universidadAModificar.localidad = universidadDto.localidad;
  await universidadAModificar.save();
  res.status(201).json(universidadAModificar)
}

module.exports = {
  getAllUniversidades,
  getUniversidadById,
  createUniversidad,
  deleteUniversidad,
  updateUniversidad
};

