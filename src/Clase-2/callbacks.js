const equiposFutbolArgentino = [
	{
		nombre: 'Boca Juniors',
		estadio: 'La Bombonera',
		ciudad: 'Buenos Aires',
	},
	{
		nombre: 'River Plate',
		estadio: 'El Monumental',
		ciudad: 'Buenos Aires',
	},
	{
		nombre: 'Independiente',
		estadio: 'Libertadores de América',
		ciudad: 'Avellaneda',
	},
	{
		nombre: 'Racing Club',
		estadio: 'Cilindro de Avellaneda',
		ciudad: 'Avellaneda',
	},
	{
		nombre: 'San Lorenzo',
		estadio: 'Nuevo Gasómetro',
		ciudad: 'Buenos Aires',
	},
	{
		nombre: 'Vélez Sarsfield',
		estadio: 'José Amalfitani',
		ciudad: 'Liniers, Buenos Aires',
	},
	{
		nombre: "Newell's Old Boys",
		estadio: 'Marcelo Bielsa',
		ciudad: 'Rosario',
	},
	{
		nombre: 'Central Córdoba',
		estadio: 'Alberto José Armando',
		ciudad: 'Santiago del Estero',
	},
	{
		nombre: 'Talleres',
		estadio: 'Estadio Mario Alberto Kempes',
		ciudad: 'Córdoba',
	},
	{
		nombre: 'Estudiantes de La Plata',
		estadio: 'Estadio UNO',
		ciudad: 'La Plata',
	},
];

const nuevoArreglo = equiposFutbolArgentino.map(function (equipo) {
	equipo.nacion = 'Argentina';
	return equipo;
});
console.log({ nuevoArreglo });

const equiposDeBsAs = equiposFutbolArgentino.filter((equipo) => equipo.ciudad === 'Buenos Aires');
console.log({ equiposDeBsAs });
