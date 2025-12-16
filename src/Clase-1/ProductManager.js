//================================================
//EJERCICIO DE TAREA
//================================================
//Clase ProductManager
class ProductManager {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		const newProduct = {
			id: this.products.length + 1,
			tittle: product.tittle,
			description: product.description,
			price: product.price,
			thumbnail: product.thumbnail,
			code: product.code,
			stock: product.stock,
		};

		if (Object.values(newProduct).includes(undefined)) {
			alert('Todos los campos son obligatorios');
		} else if (this.getProducts().find((p) => p.code === newProduct.code)) {
			alert('El codigo ingresado corresponde a otro producto');
		} else {
			this.products.push(newProduct);
		}
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const productFound = this.products.find((product) => product.id === id);

		if (!productFound) {
			console.error('Not Found');
			return;
		}

		return this.products.find((product) => product.id === id);
	}
}
