import { Router } from 'express';
import User from '../models/user.model.js';

const router = Router();

/*
	CRUD de usuarios utilizando el modelo de usuario definido en user.model.js.
	Cada ruta maneja una operación específica (obtener todos los usuarios y crear
	un nuevo usuario) y utiliza los métodos de Mongoose para interactuar con la 
	base de datos de MongoDB. Las respuestas se envían en formato JSON, indicando
	el estado de la operación, un mensaje descriptivo y, en caso de éxito, el 
	resultado de la operación (usuarios obtenidos o nuevo usuario creado). En caso
	de error, se devuelve un mensaje de error con detalles sobre lo que salió mal.
*/

// GET users
router.get('/', async (req, res) => {
	try {
		const user = await User.find(); //											 Utilizamos el modelo de usuario para obtener todos los usuarios de la base de datos
		res.status(200).json({ status: 'success', message: 'Users', payload: user });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al obtener los usuarios', error: error.message });
	}
});

// GET users by id
router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id); //											 Utilizamos el modelo de usuario para obtener un usuario específico por su ID

		if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });

		res.status(200).json({ status: 'success', message: 'User found', payload: user });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al obtener el usuario', error: error.message });
	}
});

// POST user
router.post('/', async (req, res) => {
	const { first_name, last_name, email } = req.body;

	try {
		const newUser = await User.create({ first_name, last_name, email });

		res.status(201).json({ status: 'created', message: 'User created', payload: newUser });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al crear el usuario', error: error.message });
	}
});

// PUT user
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { first_name, last_name, email } = req.body;

	try {
		const updatedUser = await User.findByIdAndUpdate(
			{ _id: id },
			{ $set: { first_name, last_name, email } },
		);

		if (!updatedUser) return res.status(404).json({ status: 'error', message: 'User not found' });

		res.status(200).json({ status: 'updated', message: 'User updated', payload: updatedUser });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al actualizar el usuario', error: error.message });
	}
});

// DELETE user
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const deletedUser = await User.findByIdAndDelete(id);

		if (!deletedUser) return res.status(404).json({ status: 'error', message: 'User not found' });

		res.status(200).json({ status: 'deleted', message: 'User deleted', payload: deletedUser });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al eliminar el usuario', error: error.message });
	}
});

export default router;
