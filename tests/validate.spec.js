const fetchMock = require('fetch-mock')
const { validateLinks, promisesFetch } = require('../API/validate')
require('isomorphic-fetch')


fetchMock
.mock('https://www.facebook.com', 404)
.mock('https://nodejs.org/api/path.html', 200)
.mock('https://docs.google.com/spreadsheets/d/1Ka4UZFO20syGtuveO99Wi49Lth6LiDhEdIGuew23fMk/edit#gid=443532081', 500)


describe('Funciones para validar ruta de validate.js', () => {
	it('Tiene que retornar un array de objetos', () => {
		validateLinks([
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
					status: 500,
					statusText: "Internal Server Error"
				}
			]))

	})

	it('Tiene que retornar un objeto', () => {
		return expect(promisesFetch({ href: 'https://www.facebook.com' })).resolves
			.toEqual({ href: 'https://www.facebook.com', status: 404, statusText: 'Not Found' });
	})
})