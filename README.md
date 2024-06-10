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

####################################################################################################
## GUIA DE IMPLEMENTACIÓN:
Estructura del Proyecto

1. Creamos la estructura básica para comenzar con el proyecto:
   a) Abrir la terminal de su preferencia: cmd(windows) o gitbash.
   b) Una vez definido en dónde se alojará la carpeta del proyecto...
   c) .. en la terminal tipear los siguientes comandos y en el orden que se indican...

   mkdir TP-TALLER  <┘  (creación del directorio con su respectivo nombre)   
   cd  TP-TALLER    <┘  (me posicionao en la carpetas a trabajar)
   
   npm init -y      <┘  (inicializo un proyecto en node.js, tambien se generará un archivo package.json, un script:  dependencias y librerias que necesitará mi código)
   npm i express    <┘  (Se instalará esta dependencia que proporcionará distintos mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas))

   npm i joi        <┘  (Se instalará la biblioteca de validación para JavaScript que facilita la definición y aplicación de reglas de validación para datos, asegurando que cumplan con ciertos criterios antes de ser procesados por una aplicación.)
   npm i -D nodemon <┘  (Permitirá reiniciar nuestro servidor automáticamente al momento de detectar que hubo un cambio en nuestro código y estos se verán reflejados inmediatamente, sin la necesidad de que tengas que bajar el servidor y volverlo a levantar)

2. Crear las carpetas necesarias para el proyecto:
   mkdir src        <┘  (carpeta 'src' (source) se almacenará todo el código de desarrollo, las carpetas y archivos de nuestro proyecto, fuera deberian de estar el Readme, el . gitignore, el package. JSON y uno que otro archivo)
   mkdir src/routes <┘  (En esta carpeta se encontrarán las distintas rutas  )
   mkdir src/controllers <┘
   mkdir src/middlewares <┘
   mkdir data   <┘


3. Configurar el script de nodemon en 'package.json':

  {
  "name": "tp-taller",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "nodemon": "^3.1.3",
    "sequelize-cli": "^6.6.2",
    "sqlite3": "^5.1.7"
  },
  "dependencies": {
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "sequelize": "^6.37.3"
  }
}

4. Definir la Estructura de datos:
   Crear un archivo 'data.json' en la carpeta './data' como en  el ejemplo:

   {
    "carreras": [
        {
            "id": 1,
            "nombre": "Ingeniería Informática",
            "materias": [
                {
                    "id": 1,
                    "nombre": "Algoritmos y Estructuras de Datos"
                },
                {
                    "id": 2,
                    "nombre": "Programación Orientada a Objetos"
                }
            ]
        }
    ]
}

5. Implementar la API:
   Crear un archivo 'index.js' en la carpeta 'src'





## Grupo Integrado por: BUSTAMANTE, UCIEL - LAMAS, MARTÍN - PELOZO, KAREN M. - MONTENEGRO, CARLA V.

