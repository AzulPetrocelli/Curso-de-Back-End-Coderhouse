//TIPOS DE VARIABLES---------------------------------------
// Alcance global
// var variableLegacy = 0

//Alcance Local
let variableLet = 1;
const constante = 1;

//Ejemplo 1
let cantidadDeViews = 1000;

const crearNuevaVariable = () => {
	let cantidadDeViews = 0;
	return cantidadDeViews;
};

crearNuevaVariable();

console.log(cantidadDeViews); // --> 1000

//Ejemplo 2
let goles = 0;
let partidosJugados = 0;

if (true) {
	let goles = 10;
	partidosJugados = 10;
}

console.log(goles); // --> 0
console.log(partidosJugados); // --> 10

//Ejemplo 3
let variable = 0; // --> 0

if (true) {
	let variable; // --> undefine

	if (true) {
		variable = 10;
	}
	console.log(variable); // --> 10
}

console.log(variable); // --> 0

//Ejemplo 4
sinInicializar = 10;
console.log(sinInicializar); // --> 10

//TIPOS DE VALORES---------------------------------------
const number = 123;
const string = '';
const boolean = true;
const date = Date;
const nulo = null;
const indefinido = undefined;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof date);
console.log(typeof nulo);
console.log(typeof indefinido);

//OBJETOS Y ARRAYS---------------------------------------
const array = [1, 2, 3, 4, 5];
const objeto = {
	clave: 'valor',
	objetoInterno: {
		claveInterna: 'valorInterno',
	},
};

console.log(typeof array); // --> object --> instancia de la clase Array
const esArrayONo = Array.isArray(array); // --> true --> metodo de la clase Array

console.log(typeof objeto); // --> object

//Personas
const persona1 = { dni: '12.345.678', nombre: 'Juan', apellido: 'Perez' };
const persona2 = { dni: '12.345.678', nombre: 'Azul', apellido: 'Navarro' };
const persona3 = { dni: '12.345.678', nombre: 'Pepe', apellido: 'Gonzales' };

//Clase Persona
class Persona {
	//Metodo constructor
	constructor(dni, nombre, apellido) {
		this.dni = dni;
		this.nombre = nombre;
		this.apellido = apellido;
	}
}

//Instancias de Persona
const persona4 = new Persona('23.456.789', 'Laura', 'Lopez');
const persona5 = new Persona('34.567.890', 'Ana', 'Martinez');
