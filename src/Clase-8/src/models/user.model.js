/*
En este archivo se define el modelo de usuario utilizando Mongoose. El modelo se basa
en un esquema que describe la estructura de los documentos en la colección de usuarios.
Cada usuario tiene un nombre, apellido y correo electrónico, siendo este último único 
y obligatorio.
Este modelo nos va a permitir interactuar con la base de datos de MongoDB para realizar
operaciones CRUD con las consultas de mongoDB y sus operadores de consulta (metodos como
find, findOne, updateOne, deleteOne, etc).
*/

//Importar mongoose para crear el modelo de usuario
import mongoose from 'mongoose';

//Definir el nombre de la colección para los usuarios
const userCollection = 'usuarios';

//Crear el esquema del usuario
const userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: {
		type: String,
		unique: true,
		required: true,
	},
});

//Crear el modelo de usuario
const User = mongoose.model(userCollection, userSchema);

//Exportar el modelo de usuario
export default User;
