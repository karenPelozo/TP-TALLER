const Joi = require('joi');

const carrerasSchema = Joi.object().key({

    Nombre: Joi.string().required().min(3).max(20).message({
        "string.min": "nombre debe tener como minimo {#limit}",
        "string.max": "nombre debe tener como maximo {#limit}",
        "any.required": "El nombre es requerido",
        "any.empty": "El nombre no puede estar vacío",
    }),
    //"Grado" : "",
    Universidad:Joi.string().required().min(3).max(20).message({
        "string.min": "el nombre de la universidad debe tener como minimo {#limit}",
        "string.max": "el nombre de la universidad debe tener como maximo {#limit}",
        "any.required": "el nombre de la universidad es requerido",
        "any.empty": "el nombre de la universidad no puede estar vacío",
    }) 
})
