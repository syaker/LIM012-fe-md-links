const f_mdlinks = require('../API/f_mdlinks');
const validate = require('../API/validate');


describe('Todas deben ser funciones', () => {
	it('validatePath deberia ser una funcion', () => {
		expect(typeof f_mdlinks.validatePath).toBe('function');
	})

	it('verificateAbsolute deberia ser una funcion', () => {
		expect(typeof f_mdlinks.verificateAbsolute).toBe('function');
	})

	it('archiveOrDirectory deberia ser una funcion', () => {
		expect(typeof f_mdlinks.archiveOrDirectory).toBe('function');
	})

	it('extractMD deberia ser una funcion', () => {
		expect(typeof f_mdlinks.extractMD).toBe('function');
	})

	it('findLinks deberia ser una funcion', () => {
		expect(typeof f_mdlinks.findLinks).toBe('function');
	})

	it('promisesFetch deberia ser una funcion', () => {
		expect(typeof validate.promisesFetch).toBe('function');
	})

	it('validateLinks deberia ser una funcion', () => {
		expect(typeof validate.validateLinks).toBe('function');
	})
})