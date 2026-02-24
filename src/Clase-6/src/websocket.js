const messages = [{ username: 'ADMIN', message: 'Bienvenido al chat' }];

export default (io) => {
	//Inicializamos el Socket
	io.on('connection', (socket) => {
		console.log('Usuario conectado con id: ' + socket.id);

		//Definimos los eventos que vamos a escuchar y emitir
		io.emit('todos', 'Este mensaje es para todos'); // 							    envia un mensaje a todos los sockets que esten conectados
		socket.emit('unico-usuario', 'Este mensaje solo se te envia a vos'); //	        envia un mensaje solo al socket al que estamos conectados
		socket.broadcast.emit('todos-menos-yo', 'Este mensaje es para casi todos'); //  envia un mensaje a todos los sockets que esten conectados (excepto al que estamos conectados, osea el principal destinatario del mensaje)

		// Escuchamos el evento "respuesta" que el cliente emite
		socket.on('respuesta', (data) => console.log({ data }));

		// Escuchamos el evento "login" y emitimos un evento "new-user" a todos los sockets excepto al que emitio el evento "login"
		socket.on('login', (username) => {
			socket.broadcast.emit('new-user', username);
		});

		//Emitimos el evento "all-messages" al cliente que se conectó con el array de mensajes actualizado
		socket.emit('all-messages', messages);

		//Escuchamos el evento "new-message" que el cliente emite, lo agregamos al array de mensajes y emitimos un evento "connected" a todos los sockets con el array de mensajes actualizado
		socket.on('new-message', (message) => {
			messages.unshift(message);
			io.emit('all-messages', messages);
		});
	});
};
