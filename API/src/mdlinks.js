const { validatePath, verificateAbsolute, convertToAbsolute, archiveOrDirectory, extractMD, findLinks } = require('./f_mdlinks')
const { validateLinks } = require('./validate')


const mdlinks = (path, options) => {
	const arrURL = new Promise((resolve, reject) => {
		if (validatePath(path) == true && verificateAbsolute(path) == true && options.validate === true) {
			extractMD(archiveOrDirectory(path))
				.then((archive) => validateLinks(findLinks(archive)))
				.then((arrobj) => resolve(arrobj))

		} else if (validatePath(path) == true && verificateAbsolute(path) == false && options.validate === true) {

			extractMD(archiveOrDirectory(convertToAbsolute(path)))
					.then((archive) => validateLinks(findLinks(archive)))
					.then((arrobj) => resolve(arrobj))
			
		} else if (validatePath(path) == true && verificateAbsolute(path) == true && options.validate == false) {

			extractMD(archiveOrDirectory(path))
			.then((archive) => resolve(findLinks(archive)))

		} else if (validatePath(path) == true && verificateAbsolute(path) == false && options.validate == false) {

			extractMD(archiveOrDirectory(convertToAbsolute(path)))
			.then((archive) => resolve(findLinks(archive)))

		} else {
			reject('No es una ruta valida')
		}
	})
	return arrURL
}

mdlinks("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src", { validate: false})

