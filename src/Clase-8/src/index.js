//Server
import express from 'express';

//Database
import connectDB from './config/database.js'; //Expota la función de conexión a la base de datos desde el archivo database.js

//Routes
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';

//settings
const app = express();
app.set('PORT', 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
	res.json({ title: 'Home Page' });
});
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

//listeners
connectDB();
app.listen(app.get('PORT'), () => {
	console.log(`Server on port http://localhost:${app.get('PORT')}`);
});
