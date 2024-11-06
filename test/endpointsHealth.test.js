const request = require('supertest');

describe('Testando disponibilidade dos endpoints', () => {
  const endpoints = [
    '/people/1/',
    '/planets/1/',
    '/starships/9/',
    '/species/1/',
    '/vehicles/14/'
  ];

  endpoints.forEach((endpoint) => {
    it(`Deve retornar 200 para o endpoint ${endpoint}`, async () => {
      await request('https://swapi.dev/api')
        .get(endpoint)
        .expect(200);
    });
  });
});
