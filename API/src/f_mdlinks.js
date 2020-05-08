const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const marked = require('marked');

// VALIDA LA RUTA - RETORNA TRUE/FALSE
const validatePath = (pathReceived) => fs.existsSync(pathReceived);

// VERIFICA SI LA RUTA ES ABSOLUTA - RETORNA TRUE/FALSE
const verificateAbsolute = (pathToVerificate) => path.isAbsolute(pathToVerificate);

// CONVIERTE RUTA RELATIVA A ABSOLUTA - RETORNA RUTA ABSOLUTA
const convertToAbsolute = (pathTaken) => path.resolve(pathTaken);

//  VERIFICA SI ES UN ARCHIVO O UN DIRECTORIO - RETORNA ARRAY CON RUTAS 
const archiveOrDirectory = (pathTaken) => {
	const statsPath = fs.statSync(pathTaken);
	const isArchive = statsPath.isFile();
	const isDirectory = statsPath.isDirectory();
	let allArchives = [];
	if (isArchive) {
		allArchives.push(pathTaken);
	} else if (isDirectory) {
		//Lee el directorio
		const readDirectory = fs.readdirSync(pathTaken);
		// Aqui obtengo la ruta absoluta de cada archivo y/o directorio mediante path join, uniendo la ruta
		// de la carpeta donde estan todos mis archivos + el elemento que se esta verificando (nameOfFile)
		// porque cada elemento representa un archivo de la carpeta :)
		const arrayOfPath = readDirectory.map((nameOfFile) => {
			const paths = path.join(pathTaken, nameOfFile);
			return paths;
		})
		arrayOfPath.forEach((file) => {
			const onlyPaths = archiveOrDirectory(file);
			allArchives = allArchives.concat(onlyPaths);
		})
	}
	return allArchives;
}

// EXTRAER ARCHIVOS CON EXTENSION .MD // RETORNA ARRAY
const extractMD = (archives) => new Promise((resolve, reject) => {
	let allFiles = [];
	archives.forEach((file) => {
		const extensionPath = path.extname(file); //Extrae la extension
		if (extensionPath == '.md') {
			allFiles.push(file); //Si cumple introduce dentro de la ruta
		}
	})
	resolve(allFiles);
	reject('No se encontraron archivos con extensión .md');
})


//BUSCA LAS URL EN EL ARCHIVO .MD Y LAS GUARDA EN UN ARRAY

const findLinks = (archivemd) => {
	const allURL = [];
	archivemd.forEach((filemd) => {
		const readArchive = fs.readFileSync(filemd, "utf8");
		const convertToHTML = new JSDOM(marked(readArchive));
		const anchorElements = convertToHTML.window.document.querySelectorAll('a');
		anchorElements.forEach((link) => {
			allURL.push({
				href: link.href,
				text: (link.textContent).slice(0, 50),
				link: filemd,
			})
		});
	})
	return allURL
};

module.exports = {
	validatePath,
	verificateAbsolute,
	convertToAbsolute,
	archiveOrDirectory,
	extractMD, findLinks,
}