const { Universidad, Carrera } = require('../../models');

const getAllUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.findAll({
      include: [
        { model: Carrera, as: 'carreras' }
      ]
    });
    res.status(200).json(universidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUniversidadById = async (req, res) => {
  const id = req.params.id;
  try {
    const universidad = await Universidad.findByPk(id, {
      include: [
        { model: Carrera, as: 'carreras' }
      ]
    });
    if (universidad) {
      res.status(200).json(universidad);
    } else {
      res.status(404).json({ message: 'Universidad not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUniversidad = async (req, res) => {
  const { nombre, localidad } = req.body;
  try {
    const universidad = await Universidad.create({ nombre, localidad });
    res.status(201).json(universidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUniversidad = async (req, res) => {
  const id = req.params.id;
  try {
    const universidad = await Universidad.findByPk(id);
    if (universidad) {
      await universidad.destroy();
      res.status(200).json({ message: 'Universidad eliminada' });
    } else {
      res.status(404).json({ message: 'Universidad not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUniversidades,
  getUniversidadById,
  createUniversidad,
  deleteUniversidad
};
