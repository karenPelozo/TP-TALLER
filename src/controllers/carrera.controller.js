const { Carrera, Materia, Tipo_Grado } = require('../../models')
const controller = {}

const getAllCarreras = async(req, res) => {
    const carreras = await Carrera.findAll({
        include: [
          { model: Materia, as: 'materias' },
          { model: Tipo_Grado, as: 'tipoGrado' }
        ]
    })
    res.status(200).json(carreras);
}

const getCarreraById = async(req, res) => {
    const id = req.params.id;
    const carrera = await Carrera.findByPk(id, {
        include: [
          { model: Materia, as: 'materias' },
          { model: Tipo_Grado, as: 'tipoGrado' }
        ]
    });
    return res.status(200).json(carrera)
}

const createCarrera = async (req, res) => {
    const { nombre, grado, universidad } = req.body;
    const carrera = await Carrera.create({ nombre, grado, universidad });
    res.status(201).json(carrera);
}
  
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
}

controller.getAllCarreras = getAllCarreras;
controller.getCarreraById = getCarreraById;
controller.createCarrera = createCarrera;
controller.deleteCarrera = deleteCarrera;
controller.createMateriaInCarrera = createMateriaInCarrera;
controller.getMateriasInCarrera = getMateriasInCarrera;

module.exports =controller;
