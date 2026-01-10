const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const obj = {};

//Mi solución con setTimeout
//let cont = 0;
// setInterval(() => {
// 	if (cont < 10000) {
// 		const number = randomNumber();

// 		obj[number] = (obj[number] + 1) | 1;
// 		cont++;
// 	}
// }, 1);

const calcularNumero = (iterations, max, min) => {
	return new Promise((resolve, reject) => {
		if (iterations <= 0 || !min || !max || min > max) {
			reject('Parámetros inválidos');
		}
		if (min > max) {
			reject('El valor maximo debe ser mayor al minimo');
		}
		setTimeout(() => {
			const obj = {};
			for (let i = 0; i < 10000; i++) {
				const number = randomNumber(min, max);
				if (obj[number]) obj[number]++;
				else obj[number] = 1;
			}
			resolve(obj);
		}, 1);
	});
};

calcularNumero(100, 100, 20)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
