// Importar express
import express from 'express';
import handlebars from 'express-handlebars';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); //Direccion del archivo actual

//Importar rutas
import routerUser from './routes/user.routes.js';
import routerPet from './routes/pets.routes.js';
import routerViews from './routes/views.routes.js';

// Definir el puerto
const PORT = 8080;

// Crear el servidor
const app = express();

//Especificar el motor de plantilla
app.engine('handlebars', handlebars.engine()); // 						Configura el motor de plantilla
app.set('views', join(__dirname, 'views')); // 							Configura la carpeta de las plantillas
app.set('view engine', 'handlebars'); // 								Configura el motor de plantilla

//Middlewares
app.use(express.json()); // 												Transforma el JSON a objeto JS
app.use(express.urlencoded({ extended: true })); // 						Crea el req.body donde se encuentra el formulario, el extended es para que acepte objetos dentro del formulario
app.use('/static', express.static(join(__dirname, 'public'))); // 		Designo una ruta para acceder a los archivos estáticos de la carpeta public --> NOTA: si no le aclaramos el archivo en la url, por default selecciona el index

//Aplicamos una ruta padre a cada router
app.use('/', routerViews); // 											No pertenece a la API
app.use('/api/pets', routerPet); //										Pertenece a la API
app.use('/api/users', routerUser); // 									Pertenece a la API

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
