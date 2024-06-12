const models = {
  Universidad: require('./models/Universidad'),
  Carrera: require('./models/Carrera'),
  TipoGrado: require('./models/TipoGrado'),
  Materia: require('./models/Materia'),
  CarreraMaterias: require('./models/CarreraMaterias')
};

const validateEntityExists = (entity) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const model = models[entity];
    const record = await model.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: `${entity} no encontrado/a` });
    }
    next();
  };
};


const validateCarreraMateriasExists = async (req, res, next) => {
  const { id_materia, id_carrera } = req.params;
  const record = await models.CarreraMaterias.findOne({
    where: { id_materia, id_carrera }
  });
  if (!record) {
    return res.status(404).json({ message: 'Asociación de carrera y materias no encontrada' });
  }
  next();
};

module.exports = {
  validateEntityExists,
  validateCarreraMateriasExists
};