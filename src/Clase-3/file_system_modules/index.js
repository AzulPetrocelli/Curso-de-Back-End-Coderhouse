const fs = require('fs');

//writeFileSync - crea un archivo de texto de manera sincrónica
fs.writeFileSync('./ejemplo.txt', 'Hola mundo');

if (fs.existsSync('./ejemplo.txt')) {
	let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');

	console.log(contenido);

	fs.appendFileSync('./ejemplo.txt', '\nHola de nuevo');

	contenido = fs.appendFileSync('./ejemplo.txt', '\ncontenido agregado');
} else {
	console.log('El archivo no existe');
}
