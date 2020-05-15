require('isomorphic-fetch')

//Aqui fetch me retorna una promesa y el parametro es un objeto
const promisesFetch = (objeto) => fetch(objeto.href)
.then((date) => {
	objeto.status = date.status,
	objeto.statusText = date.statusText;
	return objeto
})

// VALIDAR LINKS - Recibe un array de objetos, retorna una promesa
const validateLinks = (arrayURL) => {
	//Aqui mapeo todas
	const savePromises = arrayURL.map((obj) => {
		return promisesFetch(obj)
	})
	return Promise.all(savePromises)
}

module.exports = { validateLinks, promisesFetch }