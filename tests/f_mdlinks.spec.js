const f_mdlinks = require('../API/f_mdlinks');

describe('Recibe, verifica y convierte la ruta', () => {
	it('Tiene que retornar true para saber que es valida', () => {
		expect(f_mdlinks.validatePath("C:/Users/cifer/Desktop/LIM012-fe-md-links/API")).toBe(true);
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(f_mdlinks.verificateAbsolute("API/mdlinks.js")).toBe('C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\mdlinks.js');
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(f_mdlinks.verificateAbsolute("C:/Users/cifer/Desktop/LIM012-fe-md-links/API")).toBe('C:/Users/cifer/Desktop/LIM012-fe-md-links/API');
	})

})

describe('Archivo o directorio, extrae .md, busca links', () => {

	it('Tiene que retornar un array con solo los archivos .md', () => {
		return expect(f_mdlinks.extractMD(['C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_tests/archivesmd/multiple/archive6.md'])).resolves
			.toEqual(['C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_tests/archivesmd/multiple/archive6.md'])

	})

	it('Tiene que retornar un array con objetos que contengan info de las URL', () => {
		expect(f_mdlinks.findLinks(['C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archivesmd/archive2.md'])).toStrictEqual([
			{
				href: "https://developers.google.com/v8/",
				text: 'motor de JavaScript V8 de Chrome',
				link: 'C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archivesmd/archive2.md'
			}
		]);
	})

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(f_mdlinks.archiveOrDirectory('C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archive1.md')).toStrictEqual(['C:/Users/cifer/Desktop/LIM012-fe-md-links/tests/archives_test/archive1.md']);
	});

	test('Tiene que retornar un array con todos las rutas de solo archivos', () => {
		expect(f_mdlinks.archiveOrDirectory('tests/archives_test/archivesmd/multiple/last')).toStrictEqual(
			["tests\\archives_test\\archivesmd\\multiple\\last\\archive9.md"]);
	});

})

