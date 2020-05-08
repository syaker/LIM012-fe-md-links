const funcionPrueba = (numero1, numero2) => {
	return numero1 + numero2;
}

const funcionPrueba2 = (edad1) => {
	return edad1;
}

const funcionmadre = (callback) => {
	const edad1 = 22;
	const edad2 = 34;
	return callback(edad1)
}

console.log(funcionmadre(funcionPrueba2))