// setTimeout(() => console.log("Codigo asincronico ha aparecido"), 5000)

const pintarCasa = new Promise((resolve, reject) => {
	// codigo de pintar la casa
	let pintado = false;
	setTimeout(() => {
		if (pintado) resolve('La casa a sido pintada!!');
		else reject('Aun no se ha pintado la casa...');
	}, 3000);
});

console.log('Empieza mi codigo'); // 1

console.log(pintarCasa); // 2

console.log('Prosigue mi codigo'); // 3

pintarCasa // 5 y ultima ejecucion
	.then((data) => console.log(data)) // SE CUMPLE LA PROMESA
	.catch((reason) => console.log(reason)); // NO SE CUMPLE LA PROMESA

console.log('Fin del script'); // 4

// Tarea de investigación
// ASYNC / AWAIT ???
