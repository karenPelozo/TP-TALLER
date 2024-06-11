const { Tipo_Grado } = require('../../models');

const getAllTipoGrados = async (req, res) => {
  try {
    const tipos = await Tipo_Grado.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTipoGradoById = async (req, res) => {
  const id = req.params.id;
  try {
    const tipo = await Tipo_Grado.findByPk(id);
    if (tipo) {
      res.status(200).json(tipo);
    } else {
      res.status(404).json({ message: 'Tipo de Grado not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTipoGrado = async (req, res) => {
  const { nivel } = req.body;
  try {
    const tipo = await Tipo_Grado.create({ nivel });
    res.status(201).json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTipoGrado = async (req, res) => {
  const id = req.params.id;
  try {
    const tipo = await Tipo_Grado.findByPk(id);
    if (tipo) {
      await tipo.destroy();
      res.status(200).json({ message: 'Tipo de Grado eliminado' });
    } else {
      res.status(404).json({ message: 'Tipo de Grado not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTipoGrados,
  getTipoGradoById,
  createTipoGrado,
  deleteTipoGrado
};
