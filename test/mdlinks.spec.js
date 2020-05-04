const total = require('../API/src/f_mdlinks');

describe('Recibe, verifica y convierte la ruta', () => {

	it('Tiene que retornar true para saber que es valida', () => {
		expect(total.validatePath("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src")).toBe(true);
	})

	it('Tiene que retornar true para saber que es absoluta', () => {
		expect(total.verificateAbsolute("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src")).toBe(true);
	})

	it('Tiene que devolver la ruta relativa convertida a absoluta', () => {
		expect(total.convertToAbsolute('API\\src\\archivesmd\\archivesmdvalid')).toBe("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\API\\src\\archivesmd\\archivesmdvalid");
	})



})

describe('Verifica si es archivo o directorio, extrae archivos .md, encuentra links, valida links', () => {
	it('Tiene que retornar un array con todos las rutas de solo archivos'), () => {
		expect(total.archiveOrDirectory("C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\test\\archivesmd\\archivesmdvalid")).toBe();
	}

	it('Tiene que retornar un array con solo los archivos .md', () => {
		
	})

	it('Tiene que retornar un array con las URL de los archivos .md', () => {

	})

	it('Retorna un array que contenga los objetos con la informacion extraida de cada URL', () => {

	})
})