const mdFunctions = require('../API/f_mdlinks');
const validateFunctions = require('../API/validate');


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

	it('promisesFetch deberia ser una funcion', () => {
		expect(typeof validateFunctions.promisesFetch).toBe('function');
	})

	it('validateLinks deberia ser una funcion', () => {
		expect(typeof validateFunctions.validateLinks).toBe('function');
	})
})