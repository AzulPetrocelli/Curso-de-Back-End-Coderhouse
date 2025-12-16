// DESTRUCTURING CON ARREGLO
const frutas = ['manzanas', 'peras', 'mandarinas'];

const [, , mandarinas] = frutas;

console.log(mandarinas);

// EXPONENCIAL
const age = 26 ** 2;

console.log({ age });

const haveAnana = frutas.includes('anana');

if (haveAnana) console.log('Tiene anana!');
else console.log('No anana :(');

// OPERADORES

// NULLISH (??)
frutas[5] = false;
const exists = frutas[5] ?? 'No existe el indice frutal';
console.log({ exists });

// COMPARACION CON EL OR (||)
frutas[6] = false;
const isValid = frutas[6] || 'No existe el indice frutal';
console.log({ isValid });

// TERNARIO
const multifruta =
	frutas.length > 10 ? 'Podemos hacer ensalada de frutas!' : 'No alcanzan las frutas';
console.log({ multifruta });

// REST
const personaUno = {
	dni: '23.522.222',
	nombre: 'allan',
	apellido: 'gallardo',
	email: 'allan@mail.co',
	age: 26,
	domicilio: 'calle falsa 123',
};

const { dni, ...datosPersonaUno } = personaUno;
// validaciones dni
// const { nombre, apellido, email, age, domicilio } = personaUno;
// const datosPersonaUno = { nombre, apellido, email, age, domicilio }
console.log(datosPersonaUno);

function sumarNumeros(...nums) {
	let suma = 0;
	for (let i = 0; i < nums.length; i++) {
		suma += nums[i];
	}
	console.log(suma);
}

sumarNumeros(1, 3, 5, 5, 7, 8, 3, 23);

// SPREAD OPERATOR
const coche = { marca: 'fiat', puertas: '4', motor: 2.5 };
const mejorasCoche = { turbo: true, color: 'red', motor: 3 };

// const cocheMejoradoUno = Object.assign(coche, mejorasCoche)
const cocheMejoradoUno = { ...coche, ...mejorasCoche };
console.log({ cocheMejoradoUno });
