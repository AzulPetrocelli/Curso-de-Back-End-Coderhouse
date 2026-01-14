//SERVER BASICO CON HTTP
const http = require('http');

// Crear un servidor HTTP básico
const server = http.createServer((require, response) => {
	response.end('The server is running');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});

/*
NOTA: si hago un cambio en el archivo, debo reiniciar
el servidor para que los cambios tengan efecto. Para eso usamos NODEMON
*/
