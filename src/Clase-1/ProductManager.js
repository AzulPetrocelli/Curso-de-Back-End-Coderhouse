//================================================
//EJERCICIO DE TAREA
//================================================
//Clase ProductManager
class ProductManager {
	constructor() {
		this.products = [];
	}

	addProduct(tittle, description, price, thumbnail, code, stock) {
		const product = {
			id: this.products.length + 1,
			tittle,
			description,
			price,
			thumbnail,
			code,
			stock,
		};

		if (Object.values(product).includes(undefined)) {
			alert('Todos los campos son obligatorios');
		} else if (Object.values(product).includes(code)) {
			alert('El codigo ingresado corresponde a otro producto');
		} else {
			this.products.push(product);
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
