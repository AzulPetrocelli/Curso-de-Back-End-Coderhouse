/*
Instalamos nodemon con el comando: npm install -g nodemon
luego ejecutamos el servidor con el comando: nodemon server.js

A diferencia de node, nodemon reinicia el servidor automaticamente 
cuando detecta cambios en el codigo.

Un servidor es un puerto abierto que presta servicios a otros programas.
Para crear un servidor de forma nativa lo hacemos con require('http') 
y lo ejecutamos con:

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});


Inicializamos el proyecto con npm init -y, esto crea un archivo package.json
que guarda las dependencias del proyecto, scripts que podemos corres con npm run <script>,
tipo de importacion con type: "module" o "commonjs", dependencias, version, etc.   

Creamos un servidor con express con el comando: npm install express 

Con express podemos crear un servidor mas robusto con rutas con app.get(), app.post(), etc.
Con las que podemos enviar mensajes, archivos HTML, JSON, etc.

*/
