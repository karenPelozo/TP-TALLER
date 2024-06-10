const {Materia} = require('../../models')
const controller = {}

const getAllMateria= async(req, res) => {
    const materias = await materia.findAll({
        include: [
          { model: Carrera, as: 'id' },
        ]
    })
    res.status(200).json(carreras);
}

const getMateriaById = async(req, res) => {
    const id = req.params.id;
    const materia = await Materia.findByPk(id);
    return res.status(200).json(materia)
}
const deleteMateria = async (req, res) => {
    const id = req.params.id;
    const materia = await Materia.findByPk(id);
    await Materia.destroy();
    res.status(200).json({ message: 'materia eliminada' });
};
controller.getAllMateria = getAllMateria;
controller.getMateriaById = getMateriaById;
controller.deleteMateria= deleteMateria;

module.exports = controller;