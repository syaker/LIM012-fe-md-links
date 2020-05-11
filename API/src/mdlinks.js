const { validatePath, verificateAbsolute, archiveOrDirectory, extractMD, findLinks } = require('./f_mdlinks')
const { validateLinks } = require('./validate')


const mdlinks = (path, options) => {
	return new Promise((resolve, reject) => {
		const absolutePath  = verificateAbsolute(path);
		if (validatePath(path) == true && options) {

			extractMD(archiveOrDirectory(absolutePath))
				.then((archive) => validateLinks(findLinks(archive)))
				.then((arrobj) =>  resolve(arrobj));
	
		} else if (validatePath(path) == true && !options) {

			extractMD(archiveOrDirectory(absolutePath))
			.then((archive) => resolve(findLinks(archive)));

		} else {
			reject('No es una ruta valida');
		}
	})
}

module.exports = { mdlinks };
