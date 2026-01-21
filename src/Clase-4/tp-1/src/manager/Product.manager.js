//Clase ProductManager
export class ProductManager {
	constructor(products) {
		this.products = products;
	}

    everyFieldIsDefined(product) {
        return Object.values(product).every((value) => value !== undefined);
    }

	addProduct(product) {
		const newProduct = {
			id: this.products.length + 1,
			title: product.title,
			description: product.description,
			price: product.price,
			code: product.code,
			stock: product.stock,
            status: product.status,
            category: product.category,
            thumbnails: product.thumbnails
		};

		if (!this.everyFieldIsDefined(newProduct)) {
			return { error: 'Todos los campos son obligatorios', status: 400 };
		} else if (this.products.find((p) => p.code === newProduct.code)) {
			return { error: 'El codigo ingresado corresponde a otro producto', status: 400 };
		} else {
			this.products.push(newProduct);
            return { product: newProduct, status: 201 };
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

    patchProduct(id, product) {
        const index = this.products.findIndex((product) => product.id === id);

        if (index === -1) {
            return { error: 'Product not found', status: 404 };
        } else {
            // Updated validation logic if needed, or just update
             this.products[index] = { ...this.products[index], ...product };
            return { product: this.products[index], status: 200 };
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);

        if (index === -1) {
             return { error: 'Product not found', status: 404 };
        } else {
            const deletedProduct = this.products[index];
            this.products.splice(index, 1);
            return { product: deletedProduct, status: 200 };
        }
    }
}