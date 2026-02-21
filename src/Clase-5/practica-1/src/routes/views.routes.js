import { Router } from 'express';
import fs from 'fs';

const router = Router();

const pets = fs.readFileSync('./src/db/pets.json', 'utf-8');

router.get('/', (req, res) => {
	const nameInvited = req.query.name || 'Invitado'; //        Obtener el nombre del query o usar "Invitado" por defecto
	res.render('index', { name: nameInvited }); //              render Renderiza la plantilla main, "index" se refiere a que solo renderizara al index.handlebars
});

router.get('/mascotas', (req, res) => {
	const petsObj = JSON.parse(pets);
	res.render('mascotas', { pets: petsObj }); //                Renderiza la plantilla mascotas, "mascotas" se refiere a que solo renderizara al mascotas.handlebars, y le paso un objeto con la lista de mascotas para que pueda ser utilizado en la plantilla
});

export default router;
