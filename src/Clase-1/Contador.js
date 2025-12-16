//Clase Contador
class Contador {
	static contadorGlobal = 0; // --> propiedad estatica

	//Metodo constructor
	constructor(responsable) {
		this.responsable = responsable; // --> propiedad de instancia
		this.contador = 0; // --> propiedad de instancia
	}

	//Metodos de la clase
	contar() {
		this.contador++; //Apunta a la instancia actual
		Contador.contadorGlobal++; //Apunta a la clase Contador
		return this.contador;
	}

	descontar() {
		this.contador--;
	}

	getResponsable() {
		return `${this.responsable} es el responsable de este contador.`;
	}

	getCuentaGlobal() {
		return Contador.contadorGlobal;
	}
}

//Instancias de Contador
const contador1 = new Contador('Azul');
const contador2 = new Contador('Juan');

//Ejemplo 5

console.log(contador1.contador); // --> 0
console.log(contador1.contar()); // --> 1
console.log(contador1.contar()); // --> 2
console.log(contador1.contar()); // --> 3

console.log(contador2.contar()); // --> 1

console.log(contador1.getCuentaGlobal()); // --> 4

console.log(contador1.getResponsable()); // --> "Azul es el responsable de este contador."
