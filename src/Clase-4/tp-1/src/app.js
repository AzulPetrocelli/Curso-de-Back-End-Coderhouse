//Modulo Express
import express from 'express';

//Routers
import routerProducts from "../src/routes/products.routes.js";
import routerCart from "../src/routes/carts.routes.js";

//Servidor
const server = express();
const PORT = 8080;

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//Aplicamos una ruta padre a cada router
server.use("/api/carts", routerCart); 
server.use("/api/products", routerProducts); 

//Escucha el puerto
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
