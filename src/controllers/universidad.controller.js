const db = require('../models'); // Importa los modelos necesarios
const Universidad = db.universidad; // Importa el modelo universidad

const getUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.findAll();
    res.status(200).json(universidades);
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

module.exports = {
  getUniversidades,
  createUniversidad
};




