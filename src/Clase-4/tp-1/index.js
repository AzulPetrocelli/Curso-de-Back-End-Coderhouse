import express from 'express';

const server = express();
const PORT = 8080;

let products = [];

//==========================================================
// MANEJO DE PRODUCTOS
//==========================================================

//Retorna todos los productos
server.get('/api/products/', (req, res) => {
    res.json({products});
});

//Retorna un porducto segun su id
server.get('/api/products/:pid', (req, res) => {
    const { pid } = req.params;

    const result = products.find((product) => product.id === parseInt(pid));

    if (result) {
        res.json({product:result});
    } else {
        res.status(404).send('Product not found');
    }
    
});

//Agrega un producto
server.post('/api/products/', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    const newProduct = {
        id: products.length + 1,
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails
    };

    products.push(newProduct);
    res.json({product:newProduct});
});

//Actualiza un producto
server.put('/api/products/:pid', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;
    const { pid } = req.params;

    const index = products.findIndex(p => parseInt(p.id) === parseInt(pid));
    const productToEdit = products[index];
    
    if (!productToEdit) {
        return res.status(404).send('Product not found');
    }else{
        //Edita los campos que sean distinto de undefined
        productToEdit.title = title || productToEdit.title;
        productToEdit.description = description || productToEdit.description;
        productToEdit.code = code || productToEdit.code;
        productToEdit.price = price || productToEdit.price;
        productToEdit.status = status || productToEdit.status;
        productToEdit.stock = stock || productToEdit.stock;
        productToEdit.category = category || productToEdit.category;
        productToEdit.thumbnails = thumbnails || productToEdit.thumbnails;
        
        products[index] = productToEdit;
        
        res.json({product:productToEdit});
    }

});

//Elimina un producto
server.delete('/api/products/:pid', (req, res) => {
    const { pid } = req.params;

    const index = products.findIndex(p => parseInt(p.id) === parseInt(pid));
    const productToDelete = products[index];
    
    if (!productToDelete) {
        res.status(404).send('Product not found');
    } else {
        products.splice(index, 1);
        res.json({product_deleted:productToDelete});
    }
});

//==========================================================
// MANEJO DE CARRITOS
//==========================================================

class CartManager {
    constructor () {
        this.carts = [];
    }

    createCart() {
        const newCart = {
            id: this.carts.length + 1,
            products: []
        };
        this.carts.push(newCart);
        return newCart;
    }

    getCartById(id) {
        return this.carts.find((cart) => cart.id === id);
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
}

//Crea un nuevo carrito
server.post('/api/carts/', (req, res) => {
    const { products } = req.body;
    
    const newCart = {
        id: carts.length + 1,
        products: products || []
    };
    carts.push(newCart);
    res.json({cart:newCart});
});

//Retorna los productos de un carrito segun su id
server.get('/api/carts/:cid', (req, res) => {
    const { cid } = req.params;
    const result = carts.find((cart) => cart.id === parseInt(cid));
    if (result) {
        res.json({product_cart:result.products});
    } else {
        res.status(404).send('Cart not found');
    }
});

//Agrega un producto a un carrito
server.post('/api/carts/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const cart = carts.find((cart) => cart.id === parseInt(cid));
    if (cart) {
        const product = products.find((product) => product.id === parseInt(pid));
        if (product) {
            const productInCartIndex = cart.products.findIndex((p) => p.product.id === parseInt(pid));
            if (productInCartIndex !== -1) {
                cart.products[productInCartIndex] = {product: pid, quantity: cart.products[productInCartIndex].quantity + 1};
            } else {
                cart.products.push({product: pid, quantity: 1});
            }
            
            res.json({products_cart:cart.products});
        } else {
            res.status(404).send('Product not found');
        }
    } else {
        res.status(404).send('Cart not found');
    }
});

//Escucha el puerto
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
