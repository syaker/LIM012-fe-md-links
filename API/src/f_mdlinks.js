const path = require('path');
const fs = require('fs');
const https = require('https');
const request = require('request');

// VALIDA LA RUTA - RETORNA TRUE/FALSE
const validatePath = (pathReceived) => {
	try {
		const isPathValid = fs.existsSync(pathReceived);
		return isPathValid
	} catch (error) {
		console.log("Is not a path valid :(");
	}
	;
};

// VERIFICA SI LA RUTA ES ABSOLUTA - RETORNA TRUE/FALSE
const verificateAbsolute = (pathToVerificate) => path.isAbsolute(pathToVerificate);


// CONVIERTE RUTA RELATIVA A ABSOLUTA - RETORNA RUTA ABSOLUTA
const convertToAbsolute = (pathTaken) => path.resolve(pathTaken);
;

//  VERIFICA SI ES UN ARCHIVO O UN DIRECTORIO - RETORNA ARRAY CON RUTAS 
const archiveOrDirectory = (pathTaken) => {
	const statsPath = fs.statSync(pathTaken);
	const isArchive = statsPath.isFile();
	const isDirectory = statsPath.isDirectory();
	let allArchives = [];
	if (isArchive) {
		allArchives += pathTaken;
	} else if (isDirectory) {
		//Lee el directorio
		const readDirectory = fs.readdirSync(pathTaken);
		//Aqui obtengo la ruta absoluta de cada archivo y/o directorio mediante path join, uniendo la ruta
		//de la carpeta donde estan todos mis archivos + el elemento que se esta verificando (nameOfFile)
		//porque cada elemento representa un archivo de la carpeta :)
		const arrayOfPath = readDirectory.map((nameOfFile) => {
			const paths = path.join(pathTaken, nameOfFile);
			return paths;
		})
		const arrayOfArchives = arrayOfPath.forEach((file) => {
			const onlyPaths = archiveOrDirectory(file);
			allArchives = allArchives.concat(onlyPaths);
		})
		
	}
	return allArchives
}


//console.log(archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd'))

// EXTRAER ARCHIVOS CON EXTENSION .MD // RETORNA ARRAY
const extractMD = (archives) => {
	let allFiles = [];
	const onlyArchivesMD = archives.forEach((file) => {
		const extensionPath = path.extname(file); //Extrae la extension
		if (extensionPath == '.md') {
			allFiles.push(file); //Si cumple introduce dentro de la ruta
		} else if ('') {
			console.log('No se encontraron archivos con extensión .md')
		}
	})
	return allFiles;
}

console.log(extractMD(archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd')))

//  BUSCA LAS URL EN EL ARCHIVO .MD Y LAS GUARDA EN UN ARRAY
const findLinks = (archive) => {
	const allURL = []
	const searchURL = archive.forEach((file) => {
		const read = fs.readFileSync(file, "utf8");
		const result = read.match(/https/);
		allURL.push(result)
	})
	return allURL;
};



// VALIDAR LINKS
const validateLinks = (arrayURL) => {
	// const array2 = arrayURL.forEach((elem) => {
	let hi;
	https.get(arrayURL, (URL) => hi += 35);
	console.log(hi)
};
//validateLinks('https://facebook.com')




exports.validatePath = validatePath;
exports.verificateAbsolute = verificateAbsolute;
exports.convertToAbsolute = convertToAbsolute;
exports.archiveOrDirectory = archiveOrDirectory;
exports.extractMD = extractMD;
//exports.findLinks = findLinks;
//exports.validateLinks = validateLinks;