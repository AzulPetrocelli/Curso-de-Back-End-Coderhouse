//SERVER CON EXPRESS

/*
NOTA: definir en package.json el script "dev": "nodemon server.js"
y luego correr en la terminal: npm run dev


DIFERENCIA ENTRE PUT Y PATCH
- PUT: se utiliza para actualizar un recurso completo. Reemplaza toda la representación del recurso con la nueva información proporcionada.
- PATCH: se utiliza para actualizar parcialmente un recurso. Solo modifica los campos especificados en la solicitud, dejando el resto del recurso sin cambios.
*/

//importacion de tipo commonjs
const express = require('express');

//importacion de tipo module
import express from 'express';

import { users } from './mock-users.js';

const server = express();

// Crear un servidor Express básico
server.get('/', (request, response) => {
	response.send('The server is running with Express');
});

// server.get('/saludar', (request, response) => {
// 	response.send('Otra direccion URL');
// });

// server.get('/a-color', (request, response) => {
// 	let msg = 'hola a todos';
// 	response.send(`<h1 style="color:blue">${msg}</h1>`);
// });

// server.get('/index', (request, response) => {
// 	response.sendFile(process.cwd() + '/public/index.html');
// });

// server.get('/user', (request, response) => {
// 	const data = {
// 		nombre: 'Azul',
// 		apellido: 'Petrocelli',
// 		edad: 22,
// 	};
// 	response.json(data);
// });

server.get('/users', (request, response) => {
	response.json(users);
});

server.get('/users/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const user = users.find((u) => u.id === id);
	if (user) {
		response.json(user);
	} else {
		response.status(404).json({ error: 'User not found' });
	}
});

// Escuchar en el puerto 8080
server.listen(8080, () => {
	console.log('Server is listening on port 8080');
});
