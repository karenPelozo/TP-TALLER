const {Materia} = require('..models/')
const controller ={}
const getAllMaterias = async(req, res) => {
    const materia = await Materia.findAll({
        include: [
          { model: Materia, as: 'materias' }
           ]
    })
    res.status(200).json(materia);
}
const getMateriaById = async(req, res) => {
    const id = req.params.id;
    const materia = await Materia.findByPk(id, {
        include: [
          { model: Materia, as: 'materias' },
           ]
    });
    return res.status(200).json(materia)
}


const deleteMaterias= async (req, res) => {
    const id = req.params.id;
    const materia = await Materia.findByPk(id);
    await Materia.destroy();
    res.status(200).json({ message: 'materia eliminada' });
};

controller.getAllMaterias = getAllMaterias;
controller.getMateriaById = getMateriaById;
controller.deleteMaterias = deleteMaterias;

module.exports =controller;