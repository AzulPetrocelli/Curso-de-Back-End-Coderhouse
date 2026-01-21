
//Router
import {Router} from "express";

//File System
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

//Manager
import {ProductManager} from "../manager/Product.manager.js";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productPath = path.join(__dirname, "../db/products.json");
const products = JSON.parse(fs.readFileSync(new URL(productPath, import.meta.url), "utf-8"));
const productManager = new ProductManager(products);

//Retorna todos los productos
router.get('/', (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
});

//Retorna un porducto segun su id
router.get('/:pid', (req, res) => {
    const { pid } = req.params;

    const result = productManager.getProductById(parseInt(pid));

    if (result) {
        res.status(200).json({product:result});
    } else {
        res.status(404).send('Product not found');
    }
});

//Agrega un producto
router.post('/', (req, res) => {
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
        fs.writeFileSync(productPath, JSON.stringify(products, null, 4));
    }
});

//Actualiza un producto
router.put('/:pid', (req, res) => {
    const { pid } = req.params;
    const  product = req.body;

    const result = productManager.patchProduct(parseInt(pid), product);
     if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
        fs.writeFileSync(productPath, JSON.stringify(products, null, 4));
    }
});

//Elimina un producto
router.delete('/:pid', (req, res) => {
    const { pid } = req.params;
    const result = productManager.deleteProduct(parseInt(pid));
    if (result.error) {
        res.status(result.status).send(result.error);
    } else {
        res.status(result.status).json(result.product);
        fs.writeFileSync(productPath, JSON.stringify(products, null, 4));
    }
});

export default router;
