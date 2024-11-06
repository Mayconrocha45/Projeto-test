const request = require('supertest');

describe('Testando pesquisa de naves estelares', () => {
  it('Deve encontrar a Estrela da Morte ao pesquisar por "Death Star"', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/starships/?search=Death')
      .expect(200);

    expect(response.body.results[0].name).toBe("Death Star");
  });
});
