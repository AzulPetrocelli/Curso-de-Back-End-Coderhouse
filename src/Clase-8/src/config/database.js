import mongoose from 'mongoose';

// Configuración de la base de datos
const DB_NAME = 'usuarios';
const DB_USER = 'azul';
const DB_PASSWORD = '11042003';

// URI de conexión a MongoDB Atlas
const mongodb_uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@coderhouse.lhregrq.mongodb.net/${DB_NAME}?appName=Coderhouse`;

// Función para conectar a MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(mongodb_uri);
		console.log('Conexión a MongoDB establecida');
	} catch (error) {
		console.error('Error al conectar a MongoDB:', error);
	}
};

export default connectDB;
