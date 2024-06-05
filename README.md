# Taller de Programación - TP 2024 - UNPAZ

Este trabajo práctico tiene como objetivo principal que los alumnos adquieran experiencia práctica en la implementación de una API REST utilizando un framework muy utilizado en la industria del sofware como es express.js

## Fecha de entrega
-  13 de Junio

## Trabajo a desarrollar en Equipos

- API REST:
Una API REST (Representational State Transfer) es un conjunto de reglas y convenciones para la creación de servicios web que permiten la comunicación entre sistemas. En este trabajo práctico, utilizaremos una API REST para exponer recursos y permitir operaciones CRUD (Create, Read, Update, Delete) sobre estos recursos.

- Enfoque Práctico:
Los alumnos implementarán varios enpoinds en el contexto de una API REST utilizando la herramientos y conocimientos aprendidos durante la cursada. Se espera que los alumnos comprendan cómo definir los recursos, establecer relaciones entre ellos y utilizar las capacidades del del framework express tales como rutas, middlewares y controladores.

- Criterios de Evaluación:
Se evaluará la precisión y completitud en la implementación de la API REST, así como la funcionalidad completa del CRUD para los recursos expuestos por la API.


### Intalacion de dependencias
Debera contar con las dependencias de produccion y desarrollo necesarias de un proyecto node. Por ejemplo:

```npm i express joi```

```npm i -D nodemon``` 

## Modelo a implementar

Basandose en el siguiente diagrama deberán generar los datos y las relaciones que consideren necearios para que la API pueda interacturar con los recursos que se muestran mas adelante.

![DIAGRAMA](DER.png)

### Descripción del modelo DER
- Una **Carrera** puede tener muchas materias.
- Una **Materia** puede solo puede estar en una carrera

A parti de los datos del modelo deberan armar la estructura de datos de json que van a usar. En la carpeta ./data deberán tener un archivo ./data/data.json con al menos 1 registro de la estructura de datos que usaron para modelar las carreras con sus correspondientes materias.

## API
Implementar la API utilizando el framework express en el entorno de ejecucion de un poryecto NodeJs. Organizar el código en rutas, controlers y middleware utilizando la separación por recurso. A continuación se detallan los endpoinds que deberán estar disponbiles en la API.

|Verbo|Recurso|Status code|Descripción|
|-----|-------|-----------|-----------|
|Get|/carreras|200|Obtener todas la carreras|
|Get|/carreras/:id|200, 404|Obtener una carrera en particular|
|Post|/carreras|201 , 400|Crear una Carrera|
|Delete|/carreras/:id|200, 404|Borra una carrera en particular|
|Post|/carreras/:id/materia|201, 404, 400|Crea un materia dentro de una carrera|
|Get|/carreras/:id/materias|200, 404| Obtener todas la materias de una Carrera
|Get|/materias|200|Obtener todas las materias|
|Get|/materias/:id|200, 404|Obtener una materia en particular|
|Delete|/materias/:id|200, 404|Borra una materia en particular|


## Consideraciones Finales sobre la Entrega

- El equipo debera entegar un repositorio de github.
- En el README.md del repositorio debera inclur el nombre del grupo y los integarntes.
- Dentro del README.md también deberá tener explicación breve de como armaron la estructura como asi también un ejemplo del json de datos.
- Debernán  detallar los commandos necesarios para la instalacion y ejecucion de la api.
- El puerto de listener deberá ser configurable por variable de entorno o un valor por defecto de 3000
- La entega debe soportar cambiar la configuración del motor de base de datos de forma simple en funcion de probar con distintos motores.

