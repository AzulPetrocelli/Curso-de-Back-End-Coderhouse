//Modulos nativos
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

//Paquetes
import { Server } from 'socket.io'; //                      	Importamos el constructor de socket.io
import handlebars from 'express-handlebars';

//Routes
import viewsRouter from './routes/views.routes.js';

//Sockets
import websocket from './websocket.js';

//Servidor
const PORT = 8080;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)); //	Direccion del archivo actual

//Especificar el motor de plantilla
app.engine('handlebars', handlebars.engine()); // 				Configura el motor de plantilla
app.set('views', join(__dirname, 'views')); // 					Configura la carpeta de las plantillas
app.set('view engine', 'handlebars'); // 						Configura el motor de plantilla

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

//Rutas
app.use('/', viewsRouter);

//Inicializamos el servidor de socket.io
const httpServer = app.listen(PORT, () => {
	console.log(`running on port ${PORT}`); // 					Guardamos el server en una constante para poder anclarlo al socket
});

const io = new Server(httpServer); // 							Inicializamos socket.io
websocket(io); // 												Pasamos el servidor de socket.io a la funcion websocket para definir los eventos que vamos a escuchar y emitir
