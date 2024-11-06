const request = require('supertest');

describe('Testando pesquisa de personagens', () => {
  it('Deve encontrar Luke Skywalker ao pesquisar por "Luke"', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/people/?search=Luke')
      .expect(200);

    expect(response.body.results[0].name).toBe("Luke Skywalker");
  });
});
