/*

Descargamos mongoDB y lo instalamos.

NOTAS:
- Las bases de datos en mongo "admin", "config" y "local" son bases de datos del sistema, no las borren ni modifiquen.   
- Si hacemos SHIFT + ENTER en la terminal de mongo, podemos escribir comandos en varias lineas, util para escribir comandos largos o con varias operaciones.

CONCEPTOS:
- Base de datos: es un contenedor de colecciones, es el equivalente a una carpeta en un sistema de archivos.
- Colección: es un contenedor de documentos, es el equivalente a un archivo en un sistema de archivos.
- Documento: es una estructura de datos que contiene información, puede ser un objeto JSON.

COMO CREAR UNA BASE DE DATOS EN MONGO:
1. Abrimos el entorno grafico de mongoDB (mongo)
2. Apretamos el boton "ope mongoDB shell" y abrimos la terminal de mongo
3. Escribimos el comando "use <nombre-de-la-base-de-datos>" y apretamos enter

COMANDOS DE MONGODB:
- show dbs: muestra las bases de datos disponibles y el espacio que ocupan
- use <nombre-de-la-base-de-datos>: selecciona la base de datos a usar (si no existe, la crea)
- db: muestra la base de datos seleccionada actualmente
- db.createCollection(<nombre-de-la-coleccion>): crea una nueva colección en la base de datos seleccionada
- show collections: muestra las colecciones disponibles en la base de datos seleccionada
- db.<nombre-de-la-coleccion>.insertOne(<documento>): inserta un nuevo documento en la colección especificada
- db.<nombre-de-la-coleccion>.insertMany([<documento1>, <documento2>, ...]): inserta varios documentos en la colección especificada
- db.<nombre-de-la-coleccion>.find(): muestra todos los documentos de la colección especificada
- db.<nombre-de-la-coleccion>.find({<campo>: <valor>}): muestra los documentos que cumplen con la condición especificada
- db.<nombre-de-la-coleccion>.updateOne({<condición>}, {$set: {<campo>: <nuevo-valor>}}): actualiza el primer documento que cumple con la condición especificada
- db.<nombre-de-la-coleccion>.deleteOne({<condición>}): elimina el primer documento que cumple con la condición especificada

OPERADORES DE CONSULTA:
Los operadores de consulta se utilizan para especificar condiciones en las consultas a la base de datos. Algunos de los operadores más comunes son:

- {$eq}: igual a
- {$ne}: diferente a
- {$gt}: mayor que
- {$gte}: mayor o igual que
- {$lt}: menor que
- {$lte}: menor o igual que
- {$in}: pertenece a un conjunto de valores
- {$nin}: no pertenece a un conjunto de valores
- {$and}: cumple con todas las condiciones especificadas
- {$or}: cumple con al menos una de las condiciones especificadas
- {$not}: no cumple con la condición especificada

FORMATO DE CONSULTAS:
- db.<nombre-de-la-coleccion>.<metodo>({<campo>: <valor> || <operador>})

Ejemplos:
- db.<nombre-de-la-coleccion>.find({<campo>: {$operador: <valor>}})
- db.<nombre-de-la-coleccion>.find({$or: [{<campo1>: <valor1>}, {<campo2>: <valor2>}, ...]})
- db.<nombre-de-la-coleccion>.findOne({$and: [{<campo1>: <valor1>}, {<campo2>: <valor2>}, ...]})
*/
