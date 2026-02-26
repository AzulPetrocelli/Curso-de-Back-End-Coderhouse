import { Router } from 'express';
import Product from '../models/product.model.js';

const router = Router();

/*
	CRUD de productos utilizando el modelo de producto definido en product.model.js.
	Cada ruta maneja una operación específica (obtener todos los productos y crear
	un nuevo producto) y utiliza los métodos de Mongoose para interactuar con la 
	base de datos de MongoDB. Las respuestas se envían en formato JSON, indicando
	el estado de la operación, un mensaje descriptivo y, en caso de éxito, el 
	resultado de la operación (productos obtenidos o nuevo producto creado). En caso
	de error, se devuelve un mensaje de error con detalles sobre lo que salió mal.
*/

// GET products
router.get('/', async (req, res) => {
	try {
		const product = await Product.find(); //											 Utilizamos el modelo de producto para obtener todos los productos de la base de datos
		res.status(200).json({ status: 'success', message: 'Products', payload: product });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al obtener los productos', error: error.message });
	}
});

// GET products by id
router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id); //											 Utilizamos el modelo de producto para obtener un producto específico por su ID

		if (!product) return res.status(404).json({ status: 'error', message: 'Product not found' });

		res.status(200).json({ status: 'success', message: 'Product found', payload: product });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al obtener el producto', error: error.message });
	}
});

// POST product
router.post('/', async (req, res) => {
	const { first_name, last_name, email } = req.body;

	try {
		const newProduct = await Product.create({ first_name, last_name, email });

		res.status(201).json({ status: 'created', message: 'Product created', payload: newProduct });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al crear el producto', error: error.message });
	}
});

// PUT product
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { first_name, last_name, email } = req.body;

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			{ _id: id },
			{ $set: { first_name, last_name, email } },
		);

		if (!updatedProduct)
			return res.status(404).json({ status: 'error', message: 'Product not found' });

		res
			.status(200)
			.json({ status: 'updated', message: 'Product updated', payload: updatedProduct });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al actualizar el producto', error: error.message });
	}
});

// DELETE product
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const deletedProduct = await Product.findByIdAndDelete(id);

		if (!deletedProduct)
			return res.status(404).json({ status: 'error', message: 'Product not found' });

		res
			.status(200)
			.json({ status: 'deleted', message: 'Product deleted', payload: deletedProduct });
	} catch (error) {
		res
			.status(500)
			.json({ status: 'error', message: 'Error al eliminar el producto', error: error.message });
	}
});

export default router;
