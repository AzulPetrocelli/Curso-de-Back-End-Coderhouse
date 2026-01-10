//Instalamos moment en la versión 2.30.1 con "npm install moment@2.30.1"
const moment = require('moment');

//Respecto a las versiones segun el numero puedemos decir:
//1. El primer numero indica cambios mayores MAYOR, es decir, cambios que rompen compatibilidad con versiones anteriores
//2. El segundo numero indica cambios menores MINOR, es decir, nuevas funcionalidades que no rompen compatibilidad, pero que se estan quedando deprecadas
//3. El tercer numero indica correcciones de errores y mejoras de rendimiento, sin añadir nuevas funcionalidades

const myByrthday = moment('20030411');

const currentDate = moment();

if (myByrthday.isValid()) {
	console.log(`Mi cumpleaños es ${myByrthday.format('DD/MM/YYYY')}`);
	console.log(`Hoy es ${currentDate.format('DD/MM/YYYY')}`);
	console.log(`Tengo ${currentDate.diff(myByrthday, 'years')} años`);
}

const diffDate = currentDate.diff(myByrthday, 'days');

console.log(`Han pasado ${diffDate} días desde mi cumpleaños`);
