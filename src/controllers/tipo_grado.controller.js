const { Tipo_Grado } = require('../../models');

const getAllTipoGrados = async (req, res) => {
  const tipos = await Tipo_Grado.findAll();
  res.status(200).json(tipos);
};

const getTipoGradoById = async (req, res) => {
  const id = req.params.id;
  const tipo = await Tipo_Grado.findByPk(id);
  res.status(200).json(tipo);
};

const createTipoGrado = async (req, res) => {
  const { nivel } = req.body;
  const tipo = await Tipo_Grado.create({ nivel });
  res.status(201).json(tipo);
};

const deleteTipoGrado = async (req, res) => {
  const id = req.params.id;
  const tipo = await Tipo_Grado.findByPk(id);
  await tipo.destroy();
  res.status(200).json({ message: 'Tipo de Grado eliminado' });
};

module.exports = {
  getAllTipoGrados,
  getTipoGradoById,
  createTipoGrado,
  deleteTipoGrado
};
