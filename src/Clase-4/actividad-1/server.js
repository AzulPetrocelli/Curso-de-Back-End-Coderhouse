//Importacion de tipo module
import express from 'express';

//Servidor
const server = express();

//Frase
const frase = 'mi flor del jardin crecio esta mañana';

//Retorna la frase completa
server.get('/api/frase', (req, res) => {
	return res.json({ frase });
});

//Retorna la palabra de la posicion indicada
server.get('/api/palabras/:position', (req, res) => {
	const { position } = req.params;
	const palabras = frase.split(' ');
	const palabra = palabras[position];

	if (palabra) return res.json({ palabra });
	else return res.status(404).json({ error: 'Palabra no encontrada' });
});

//Ingresa una palabra a la frase y retorna la posicion de la misma
server.post('/api/palabras', (req, res) => {
    const {palabra} = req.body;

    frase = `${frase} ${palabra}`;
    const palabras = frase.split(' ');

    res.json({agregada: palabra, pos: palabras.length - 1});
});

//Modifica una palabra de la frase y retorna la misma
server.put('/api/palabras/:pos', (req, res) => {
    const {pos} = req.params;
    const {palabra} = req.body;

    //Divide la frase en un array de palabras
    const palabras = frase.split(' ');

    //Guarda la palabra previa
    const frase_previa = palabras[pos];
    
    //Reemplaza una palabra especifica
    palabras[pos] = palabra;
    
    //Une el array de palabras con espacios convirtiendolo en una frase
    frase = palabras.join(' ');

    res.json({actualizada: palabra, posicion: pos, frase_previa});
});

//Elimina una palabra de la frase y retorna la misma
server.delete('/api/palabras/:pos', (req, res) => {
    const {pos} = req.params;
    const palabras = frase.split(' ');
    const palabra = palabras[pos];
    palabras.splice(pos, 1);
    frase = palabras.join(' ');

    res.json({removido: palabra, posicion: pos});
});

server.listen(8080, () => {
	console.log('Server running on port 8080');
});
