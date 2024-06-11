const { Carrera, Materia, Tipo_Grado, Universidad } = require('../../models');

const getAllCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll({
      include: [
        { model: Materia, as: 'materias' },
        { model: Tipo_Grado, as: 'tipoGrado' },
        { model: Universidad, as: 'universidad' }
      ]
    });
    res.status(200).json(carreras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCarreraById = async (req, res) => {
  const id = req.params.id;
  try {
    const carrera = await Carrera.findByPk(id, {
      include: [
        { model: Materia, as: 'materias' },
        { model: Tipo_Grado, as: 'tipoGrado' },
        { model: Universidad, as: 'universidad' }
      ]
    });
    if (carrera) {
      res.status(200).json(carrera);
    } else {
      res.status(404).json({ message: 'Carrera not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCarrera = async (req, res) => {
  const { nombre, grado, universidad } = req.body;
  try {
    const carrera = await Carrera.create({ nombre, grado, universidad });
    res.status(201).json(carrera);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCarrera = async (req, res) => {
  const id = req.params.id;
  try {
    const carrera = await Carrera.findByPk(id);
    if (carrera) {
      await carrera.destroy();
      res.status(200).json({ message: 'Carrera eliminada' });
    } else {
      res.status(404).json({ message: 'Carrera not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMateriaInCarrera = async (req, res) => {
  const id = req.params.id;
  const { nombre, cuatrimestral, anio } = req.body;
  try {
    const carrera = await Carrera.findByPk(id);
    if (carrera) {
      const materia = await Materia.create({ nombre, cuatrimestral, anio });
      await carrera.addMateria(materia);
      res.status(201).json(materia);
    } else {
      res.status(404).json({ message: 'Carrera not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMateriasInCarrera = async (req, res) => {
  const id = req.params.id;
  try {
    const carrera = await Carrera.findByPk(id, {
      include: { model: Materia, as: 'materias' }
    });
    if (carrera) {
      res.status(200).json(carrera.materias);
    } else {
      res.status(404).json({ message: 'Carrera not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCarreras,
  getCarreraById,
  createCarrera,
  deleteCarrera,
  createMateriaInCarrera,
  getMateriasInCarrera
};
