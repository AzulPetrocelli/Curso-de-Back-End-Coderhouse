//Modulo Express
import express from 'express';

//Archivos JSON
import carts from "./carts.json" with { type: "json" };
import products from "./products.json" with { type: "json" };

//Servidor
const server = express();
const PORT = 8080;

//==========================================================
// MANEJO DE PRODUCTOS
//==========================================================

//Clase ProductManager
class ProductManager {
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

const productManager = new ProductManager(products);

//Retorna todos los productos
server.get('/api/products/', (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
});

//Retorna un porducto segun su id
server.get('/api/products/:pid', (req, res) => {
    const { pid } = req.params;

    const result = productManager.getProductById(parseInt(pid));

    if (result) {
        res.status(200).json({product:result});
    } else {
        res.status(404).send('Product not found');
    }
});

//Agrega un producto
server.post('/api/products/', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    const newProduct = {
        title,
        description,
        price,
        status,
        code,
        stock,
        category,
        thumbnails
    };

    const result = productManager.addProduct(newProduct);
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
    }
});

//Actualiza un producto
server.put('/api/products/:pid', (req, res) => {
    const { pid } = req.params;
    const  product = req.body;

    const result = productManager.patchProduct(parseInt(pid), product);
     if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
    }
});

//Elimina un producto
server.delete('/api/products/:pid', (req, res) => {
    const { pid } = req.params;
    const result = productManager.deleteProduct(parseInt(pid));
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
    }
});

//==========================================================
// MANEJO DE CARRITOS
//==========================================================

class CartManager {
    constructor (carts) {
        this.carts = carts;
    }

    createCart(products) {
        const newCart = {
            id: this.carts.length + 1,
            products: products || []
        };
        this.carts.push(newCart);
        return {cart:newCart, status:200};
    }

    getCartById(id) {
        const cart = this.carts.find((cart) => cart.id === id);
        if (cart) {
            return {cart:cart, status:200};
        } else {
            return {error:'Cart not found', status:404};
        }
    }

    getProductsCartById(id) {
        return this.carts.find((cart) => cart.id === id).products;
    }

    addProductToCart(cartId, productId) {
        const cart = this.getCartById(cartId);
        if (cart) {
            const product = products.find((product) => product.id === productId);
            if (product) {
                const productInCartIndex = cart.products.findIndex((p) => p.product.id === productId);
                if (productInCartIndex !== -1) {
                    cart.products[productInCartIndex] = {product: productId, quantity: cart.products[productInCartIndex].quantity + 1};
                } else {
                    cart.products.push({product: productId, quantity: 1});
                }
                return cart.products;
            } else {
                return 'Product not found';
            }
        } else {
            return 'Cart not found';
        }
    }

    patchProductInCart(cartId, productId) {
        const cart = this.getCartById(cartId);
        if (cart) {
            const productIndex = cart.products.findIndex((product) => product.product.id === productId);
            if (productIndex !== -1) {
                cart.products[productIndex].quantity++;
                return {product: cart.products[productIndex], status: 200};
            } else {
                return {error: 'Product not found', status: 404};
            }
        } else {
            return {error: 'Cart not found', status: 404};
        }
    }
}

const cartManager = new CartManager(carts);

//Crea un nuevo carrito
server.post('/api/carts/', (req, res) => {
    const { products } = req.body;
    
    const result = cartManager.createCart(products);
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.cart);
    }
});

//Retorna los productos de un carrito segun su id
server.get('/api/carts/:cid', (req, res) => {
    const { cid } = req.params;
    const result = cartManager.getCartById(parseInt(cid));
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.cart);
    }
});

//Agrega un producto a un carrito
server.post('/api/carts/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const result = cartManager.addProductToCart(parseInt(cid), parseInt(pid));
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
    }
});    

//Escucha el puerto
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
