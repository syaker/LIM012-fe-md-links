const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = jest.requireActual('node-fetch');


Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

fetchMock.mock(
	'https://es.wikipedia.org/wiki/Markdown', 200,
)

module.exports = { fetch_mock } 