const { Carrera_Materia } = require('../../models');

const controller = {};

// Crear una nueva relación entre carrera y materia
controller.createCarreraMateria = async (req, res) => {
    try {
        const { idCarrera, idMateria } = req.body;
        const carreraMateria = await Carrera_Materia.create({ idCarrera, idMateria });
        res.status(201).json(carreraMateria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar la relación entre carrera y materia
controller.deleteCarreraMateria = async (req, res) => {
    try {
        const { idCarrera, idMateria } = req.params;
        await Carrera_Materia.destroy({ where: { idCarrera, idMateria } });
        res.status(200).json({ message: 'Relación entre carrera y materia eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = controller;
