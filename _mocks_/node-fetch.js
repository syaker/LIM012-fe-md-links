const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = jest.requireActual('node-fetch');


Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

fetchMock.mock('https://github.com/cheeriojs/cheeriof', 404)


export default fetchMock;