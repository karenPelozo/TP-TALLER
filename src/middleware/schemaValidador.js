//UNA FUNCION DENTRO DE OTRA FUNCION 
const schemaValidator=(schema)=>{
    //RETORNAME UNA VALIDACION
    return (req, res, next) => {
      //RECUPERAME DEL BODY LOS DATOS Y ME LOS VALIDES TODOS JUNTOS 
      const respuesta = schema.validate(req.body,{abortEarly : false});
      //SI LA RESPUESTA RETORNA ERROR
      if(respuesta.error){
        //RETORNAME TODOS LOS ERRORES EN UN SOLO MENSAJE
        return res.status(400).json({
          //MAPEAM LOS ERRORES PARA MOSTRARLOS EN EL MENSAJE
          errores: respuesta.error.details.map(error => ({
            atributo : error.path[0],
            error : error.message
          }))
        })
      }
      next();
    }
  }