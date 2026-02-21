import { Router } from 'express';
import fs from 'fs';

const router = Router();
const pets = fs.readFileSync('./src/db/pets.json', 'utf-8');

router.get('/', (req, res) => {
	const petsObj = JSON.parse(pets);
	res.json(petsObj);
});

router.post('/', (req, res) => {
	const { petName, petAge, petType } = req.body;
	const newPet = {
		name: petName,
		age: petAge,
		type: petType,
		adopted: false,
	};
	const objPets = JSON.parse(pets);
	objPets.push(newPet);

	fs.writeFileSync('./src/db/pets.json', JSON.stringify(objPets, null, 2)); //Escribe el archivo con el nuevo objeto en formato JSON
	res.json(newPet);
});

export default router;
