const mdFunctions = require('../API/src/f_mdlinks');
const validateFunctions = require('../API/src/validate')

describe('Recibe, verifica y convierte la ruta', () => {
	it('Tiene que retornar true para saber que es valida', () => {
		expect(mdFunctions.validatePath("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src")).toBe(true);
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(mdFunctions.verificateAbsolute("API\\src\\mdlinks.js")).toBe('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\mdlinks.js');
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(mdFunctions.verificateAbsolute("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src")).toBe('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src');
	})

})

describe('Archivo o directorio, extrae .md, busca links, valida', () => {

	it('Tiene que retornar un array con solo los archivos .md', () => {
		mdFunctions.extractMD(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\multiple\\archive6.md'])
			.then((a) => expect(a).toEqual(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\multiple\\archive6.md']))

	})

	it('Tiene que retornar un array con objetos que contengan info de las URL', () => {
		expect(mdFunctions.findLinks(["C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md"])).toStrictEqual([
			{
				href: 'https://nodejs.org/api/path.html',
				text: 'https://nodejs.org/api/path.html',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md'
			},
			{
				href: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081',
				text: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20s',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md'
			}
		]);
	})

	it('Tiene que retornar un array de objetos', () => {
		validateFunctions.validateLinks([
			{
				href: 'https://nodejs.org/api/path.html',
				text: 'https://nodejs.org/api/path.html',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md'
			},
			{
				href: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081',
				text: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20s',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md'
			}
		])
			.then((b) => expect(b).toEqual([
				{
					href: 'https://nodejs.org/api/path.html',
					text: 'https://nodejs.org/api/path.html',
					link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md',
					status: 200,
					statusText: 'OK'
				},
				{
					href: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081',
					text: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20s',
					link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md',
					status: 200,
					statusText: 'OK'
				}
			]))

	})

	it('Tiene que retornar un objeto', () => {
		validateFunctions.promisesFetch({ href: "https://www.facebook.com" })
			.then((c) => expect(c).toStrictEqual( { href: 'https://www.facebook.com', status: 200, statusText: 'OK' }))

	})

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(mdFunctions.archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md')).toStrictEqual(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archive1.md']);
	});

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(mdFunctions.archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\multiple\\last')).toStrictEqual(
			["C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\multiple\\last\\archive7.js"]);
	});

})

describe('Todas deben ser funciones', () => {
	it('validatePath deberia ser una funcion', () => {
		expect(typeof mdFunctions.validatePath).toBe('function');
	})

	it('verificateAbsolute deberia ser una funcion', () => {
		expect(typeof mdFunctions.verificateAbsolute).toBe('function');
	})

	it('archiveOrDirectory deberia ser una funcion', () => {
		expect(typeof mdFunctions.archiveOrDirectory).toBe('function');
	})

	it('extractMD deberia ser una funcion', () => {
		expect(typeof mdFunctions.extractMD).toBe('function');
	})

	it('findLinks deberia ser una funcion', () => {
		expect(typeof mdFunctions.findLinks).toBe('function');
	})

	it('validateLinks deberia ser una funcion', () => {
		expect(typeof mdFunctions.verificateAbsolute).toBe('function');
	})
})