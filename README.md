
TP-Laboratorio de Programación y Lenguaje


## Grupo Integrado por: BUSTAMANTE, UCIEL - LAMAS, MARTÍN - PELOZO, KAREN M. - MONTENEGRO, CARLA V.

![logo](logo.jpg)


El presente proyecto consiste en una APIREST desarrollado en NODE.js, con distintas dependencias que permiten el manejo y consulta de la misma, a modo de CRUD.

# Guia de Uso o Descarga:
A continuacion se detalla una guia para el uso de la misma, el cual se podrá descargar desde el enlace provisto:
1.
  a) Clonarlo desde el botón <Code>, copiando la direccion URL del repositorio, seleccionar HTTPS.
  b) Desde la terminal Gitbash, cambie al directorio que desea para clonar el proyecto.
  b) Escriba el comando git clone y a continuación pegué la URL, luego darle enter.

2.
  a) Desde la misma terminal deberá instalar las dependencias Express.js - Nodemon.js - Joi  para el debido funcionamiento del proyecto con el comando npm install.


Esta proyecto utiliza las siguiente estructura de  tablas: 


# Estructura del proyecto:  

![DIAGRAMA](DER.png)

Una universidad puede tener muchas carreras. 
Una carrera puede tener muchas materias.
Una materia puede pertenecer a muchas carreras.
Una carrera puede tener un tipo de grado.
Un tipo de grado puede estar asociado a muchas carreras.

# Enpoints:


| Verbo | Recurso | Status Code | Descripción |
|-------|---------|-------------|-------------|
| GET   | /universidades          | 200 | Obtener todas las universidades |
| GET   | /universidades/:id      | 200, 404 | Obtener universidad por ID |
| POST  | /universidades          | 201, 400 | Crear una nueva universidad |
| DELETE| /universidades/:id      | 200, 404 | Eliminar universidad por ID |
| PUT   | /universidades/:id      | 200, 404, 400 | Actualizar universidad por ID |
| GET   | /carreras               | 200 | Obtener todas las carreras |
| GET   | /carreras/:id           | 200, 404 | Obtener carrera por ID |
| POST  | /carreras               | 201, 400 | Crear una nueva carrera |
| DELETE| /carreras/:id           | 200, 404 | Eliminar carrera por ID |
| PUT   | /carreras/:id           | 200,404, 400 | Actualizar carrera por ID |
| GET   | /tipo-grados             | 200 | Obtener todos los tipos de grado |
| GET   | /tipo-grados/:id         | 200, 404 | Obtener tipo de grado por ID |
| POST  | /tipo-grados             | 201, 400 | Crear un nuevo tipo de grado |
| PUT   | /tipo-grados/:id         | 200, 404, 400 | Actualizar tipo de grado por ID |
| GET   | /materias               | 200 | Obtener todas las materias |
| GET   | /materias/:id           | 200, 404 | Obtener materia por ID |
| POST  | /materias               | 201, 400 | Crear una nueva materia |
| DELETE| /materias/:id           | 200, 404 | Eliminar materia por ID |
| PUT   | /materias/:id           | 200, 404, 400 | Actualizar materia por ID |
| GET   | /carrera-materias        | 200 | Obtener materias asociadas a carrera |
| POST  | /carrera-materias        | 201, 404 | Crear asociación entre carrera y materia |  

4. Este proyecto utiliza un motor de base de datos SQLIte3 y la base será inicializado cuando ejecute el comando npm run dev.







