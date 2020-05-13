const validate = require('../API/validate');

describe('Funciones para validar ruta de validate.js', () => {
	it('Tiene que retornar un array de objetos', () => {
		validate.validateLinks([
			{
				href: 'https://nodejs.org/api/path.html',
				text: 'https://nodejs.org/api/path.html',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archive1.md'
			},
			{
				href: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081',
				text: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20s',
				link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archive1.md'
			}
		])
			.then((b) => expect(b).toEqual([
				{
					href: 'https://nodejs.org/api/path.html',
					text: 'https://nodejs.org/api/path.html',
					link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archive1.md',
					status: 200,
					statusText: 'OK'
				},
				{
					href: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081',
					text: 'https://docs.google.com/spreadsheets/d/1Ka4UZFO20s',
					link: 'C:\\Users\\cifer\\Desktop\\LIM012-fe-md-links\\tests\\archives_tests\\archive1.md',
					status: 200,
					statusText: 'OK'
				}
			]))

	})

	it('Tiene que retornar un objeto', (done) => {
		validate.promisesFetch({ href: 'https://www.facebook.com' })
			.then((a) => expect(a).toEqual({ href: 'https://www.facebook.com', status: 200, statusText: 'OK' }));
			done()
	})
})