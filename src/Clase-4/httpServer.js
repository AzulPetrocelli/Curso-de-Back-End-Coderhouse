//SERVER BASICO CON HTTP

//importacion de tipo commonjs
const http = require('http');

// Crear un servidor HTTP básico
const server = http.createServer((request, response) => {
	response.end('The server is running');
});

// Escuchar en el puerto 8080
server.listen(8080, () => {
	console.log('Server is listening on port 8080');
});

/*
NOTA: si hago un cambio en el archivo, debo reiniciar
el servidor para que los cambios tengan efecto. Para eso usamos NODEMON
*/
