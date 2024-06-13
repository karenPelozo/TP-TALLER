const { Carrera_Materia } = require('../../models');

const controller = {};

controller.createCarreraMateria = async (req, res) => {
    const { idCarrera, idMateria } = req.body;
    const carreraMateria = await Carrera_Materia.create({ idCarrera, idMateria });
    res.status(201).json(carreraMateria);
};

controller.getAsociations = async(req, res) => {
    const association = await Carrera_Materia.findAll()
    return res.status(200).json(association)
}

module.exports = controller;
