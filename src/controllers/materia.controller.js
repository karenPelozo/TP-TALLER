const { Materia, Carrera } = require('../../models');

const getAllMaterias = async (req, res) => {
  try {
    const materias = await Materia.findAll({
      include: [
        { model: Carrera, as: 'carreras' }
      ]
    });
    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMateriaById = async (req, res) => {
  const id = req.params.id;
  try {
    const materia = await Materia.findByPk(id, {
      include: [
        { model: Carrera, as: 'carreras' }
      ]
    });
    if (materia) {
      res.status(200).json(materia);
    } else {
      res.status(404).json({ message: 'Materia not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMateria = async (req, res) => {
  const { nombre, cuatrimestral, anio, carreraId } = req.body;
  try {
    const materia = await Materia.create({ nombre, cuatrimestral, anio, carreraId });
    res.status(201).json(materia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMateria = async (req, res) => {
  const id = req.params.id;
  try {
    const materia = await Materia.findByPk(id);
    if (materia) {
      await materia.destroy();
      res.status(200).json({ message: 'Materia eliminada' });
    } else {
      res.status(404).json({ message: 'Materia not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMaterias,
  getMateriaById,
  createMateria,
  deleteMateria
};
