//SERVER CON EXPRESS

/*
NOTA: definir en package.json el script "dev": "nodemon server.js"
y luego correr en la terminal: npm run dev


DIFERENCIA ENTRE PUT Y PATCH
- PUT: se utiliza para actualizar un recurso completo. Reemplaza toda la representación del recurso con la nueva información proporcionada.
- PATCH: se utiliza para actualizar parcialmente un recurso. Solo modifica los campos especificados en la solicitud, dejando el resto del recurso sin cambios.
*/

//importacion de tipo module
import { users } from './mock-users.js';
import express from 'express';

//inicializamos el servidor
const server = express();

// Crear un servidor Express básico
server.get('/', (request, response) => {
	response.send('The server is running with Express');
});

//Podemos enviar cualquier tipo de dato
// server.get('/saludar', (request, response) => {
// 	response.send('Otra direccion URL');
// });

//Podemos enviar etiquetas HTML
// server.get('/a-color', (request, response) => {
// 	let msg = 'hola a todos';
// 	response.send(`<h1 style="color:blue">${msg}</h1>`);
// });

//Podemos enviar archivos HTML
// server.get('/index', (request, response) => {
// 	response.sendFile(process.cwd() + '/public/index.html');
// });
//el process.cwd() es el directorio actual

//Podemos enviar JSON
// server.get('/user', (request, response) => {
// 	const data = {
// 		nombre: 'Azul',
// 		apellido: 'Petrocelli',
// 		edad: 22,
// 	};
// 	response.json(data);
// });

//Enviamos los usuarios en JSON
server.get('/users', (request, response) => {
	//Podemos enviar segun sus params de la query
	const { is_active, gender } = request.query;

	let result = [...users];

	//Filtramos por genero
	if (gender && (gender === 'male' || gender === 'female')) {
		result = result.filter((u) => u.gender === gender);
	}

	//Filtramos a los que esten activos o no
	if (is_active && (is_active === 'true' || is_active === 'false')) {
		result = result.filter((u) => u.is_active === is_active);
	}

	response.json(result);
});

//Enviamos un usuario segun el parametro id en JSON
server.get('/users/:id', (request, response) => {
	const id = parseInt(request.params.id);
	const user = users.find((u) => u.id === id);
	if (user) {
		response.status(200).json(user);
	} else {
		response.status(404).json({ error: 'User not found' });
	}
});

//Escuchamos en el puerto 8080
server.listen(8080, () => {
	console.log('Server is listening on port 8080');
});
