
## GUIA DE IMPLEMENTACIÓN:
Estructura del Proyecto

1. Creamos la estructura básica para comenzar con el proyecto:
   a) Abrir la terminal de su preferencia: cmd(windows) o gitbash.
   b) Una vez definido en dónde se alojará la carpeta del proyecto...
   c) .. en la terminal tipear los siguientes comandos y en el orden que se indican...

   mkdir TP-TALLER  <┘  (creación del directorio con su respectivo nombre)   
   cd  TP-TALLER    <┘  (me posiciono en la carpeta a trabajar)
   
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
   Crear un archivo 'app.js' en la carpeta 'src', para configurar el servidor Express en Node.js:
   a) Se importa el módulo express, que es un framework web,  que simplifica la creación de la API.
   b) Se importa el módulo body-parser, que analizará y procesará las solicitudes HTTP, como JSON o datos de formularios y los convierte en objetos Javascript.
   c) Se importa un archivo routes.js , donde se contienen las definiciones de las rutas de la API.
   d) Se define el puerto en el que se ejecuta el servidor por default (3000), pero en este caso es proporcionado por la variable de entorno. 


6. Implementar la conexión a una base de datos:
   1. Instalar los paquetes necesarios:
    a) En este caso sequelize es ORM (Object-Relational Mapping) que  permitirá conectar, agrupar las transacciones y las migraciones con bases de datos SQLite en Node.js, instalar mediante el siguiente comando: npm i sequelize  <┘ 
    b) Así como, tambien sqlite3 que es una librería que nos permite conectarnos a una base de datos SQLite.
    c) Además la herramienta para la linea de comandos sequelize-cli, facilitará la creación y administración de las BD.
    






## Grupo Integrado por: BUSTAMANTE, UCIEL - LAMAS, MARTÍN - PELOZO, KAREN M. - MONTENEGRO, CARLA V.

