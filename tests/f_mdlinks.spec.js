const mdFunctions = require('../API/f_mdlinks');

describe('Recibe, verifica y convierte la ruta', () => {
	it('Tiene que retornar true para saber que es valida', () => {
		expect(mdFunctions.validatePath("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API")).toBe(true);
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(mdFunctions.verificateAbsolute("API\\mdlinks.js")).toBe('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\mdlinks.js');
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(mdFunctions.verificateAbsolute("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API")).toBe('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API');
	})

})

describe('Archivo o directorio, extrae .md, busca links', () => {

	it('Tiene que retornar un array con solo los archivos .md', () => {
		mdFunctions.extractMD(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archivesmd\\multiple\\archive6.md'])
			.then((a) => expect(a).toEqual(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archivesmd\\multiple\\archive6.md']))

	})

	it('Tiene que retornar un array con objetos que contengan info de las URL', () => {
		expect(mdFunctions.findLinks(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archivesmd\\archive2.md'])).toStrictEqual([
			{
				href: 'http://www.facebook.com/',
				text: 'http://www.facebook.com',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archivesmd\\archive2.md'
			}
		]);
	})

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(mdFunctions.archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archive1.md')).toStrictEqual(['C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archive1.md']);
	});

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(mdFunctions.archiveOrDirectory('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archivesmd\\multiple\\last')).toStrictEqual(
			["C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_test\\archivesmd\\multiple\\last\\archive9.md"]);
	});

})

