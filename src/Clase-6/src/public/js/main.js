// Inicializamos el cliente de socket.io
const socket = io();

//Escuchamos los eventos que el servidor emite
socket.on('todos', (message) => console.log(message));
socket.on('unico-usuario', (message) => console.log({ message }));
socket.on('todos-menos-yo', (message) => console.log({ message }));

//Emitimos eventos al servidor
socket.emit('respuesta', 'hola desde el cliente');

let username;
while (!username) {
	username = prompt('Ingrese su nombre');
}

// Emitimos el evento "login" al servidor con el nombre de usuario ingresado
socket.emit('login', username);

// Escuchamos el evento "new-user" que el servidor emite
socket.on('new-user', (username) => {
	alert(`Usuario ${username} se ha conectado`);
});

//Seleccionamos el elemento del DOM donde vamos a mostrar los mensajes
const box = document.querySelector('#box');

socket.on('all-messages', (messages) => {
	console.log({ messages });
	if (messages.length === 0) {
		box.innerHTML = '<p>No hay mensajes...</p>';
	} else {
		//Mi alternativa
		// const newMsgHTML = messages.map((message) => `<p>${message.user}: ${message.message}</p>`).join('');
		// box.innerHTML = newMsgHTML;

		//Alternativa del profe
		const newMsgHTML = messages.reduce(
			(acc, message) => acc + `<p><strong>${message.username}:</strong> ${message.message}</p>`,
			'',
		);
		console.log(newMsgHTML);

		box.innerHTML = newMsgHTML;
	}
});

const inputMessage = document.querySelector('#input-message');

inputMessage.addEventListener('keypress', (e) => {
	const message = inputMessage.value.trim();

	if (e.key === 'Enter' && message) {
		e.preventDefault();
		const objMessage = { username, message: inputMessage.value };
		socket.emit('new-message', objMessage);
		inputMessage.value = '';
	}
});
