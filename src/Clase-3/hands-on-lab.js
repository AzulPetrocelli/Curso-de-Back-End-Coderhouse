//Importamos el modulo crypto (nativo de Node)
const crypto = require('crypto');

class UserManager {
	//Array estatico para guardar los usuarios
	static #users = []; //IMPORTANTE: COMO ES ESTATICA SOLO PUEDO ACCEDER A ELLA CON EL NOMBRE DE LA CLASE NO CON THIS

	//Metodo que nos permite crear una contraseña hasheada
	static #createHash(password) {
		//Meotodo que nos permite hashear una contraseña de forma sincronica

		//Nota: el salt deberia ser aleatorio y guardado junto al hash

		// crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
		// password: contraseña a hashear
		// salt: valor que se añade a la contraseña para hacer el hash más seguro
		// iterations: número de iteraciones del algoritmo
		// keylen: longitud del hash resultante en bytes
		// digest: algoritmo de hash a utilizar

		const hash = crypto.pbkdf2Sync(password, 'salt', 1000, 64, 'sha3-256');
		return hash.toString('hex');
	}

	//Metodo que nos permite validar una contraseña hasheada
	static #validatePassword(password, user) {
		const hash = UserManager.#createHash(password);
		return hash === user.password;
	}

	//Metodo para crear un usuario
	createUser(userObject) {
		const { first_name, last_name, username, mail, password } = userObject;

		if (!username || !password)
			return console.error('Username and password are required to create a user.');

		const user = {
			id: UserManager.#users.lenth,
			first_name,
			last_name,
			username,
			mail,
			password: UserManager.#createHash(password), //La password se guarda hasheada
		};

		UserManager.#users.push(user);
		console.log(`Usuario ${user.username} creado.`);
	}

	//Metodo para mostrar los usuarios
	showUsers() {
		console.log(UserManager.#users);
	}

	//Metodo para logear un usuario
	login(mail, password) {
		const user = UserManager.#users.find((user) => user.mail === mail);

		if (user && user.mail === mail && user.password === password) {
			console.log(`El usuario ${user.username} se ha logeado correctamente.`);
			return true;
		} else {
			console.error('Usuario o contraseña incorrectos.');
			return false;
		}
	}
}

//Creamos un usuario
UserManager.createUser({
	first_name: 'Juan',
	last_name: 'Perez',
	username: 'juanp',
	mail: 'juanp@coderhouse.com',
	password: '1234',
});

//Lista de Usuarios
UserManager.showUsers();

//Login de usuario
UserManager.login('juanp@coderhouse.com', '1234'); //El usuario juanp se ha logeado correctamente.
UserManager.login('juanp', '1234'); //Usuario o contraseña incorrectos.
