const request = require('supertest');

describe('Testando o endpoint de planetas (planets)', () => {
  it('Deve retornar os dados de Tatooine', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/planets/1/')
      .expect(200);

    const planetData = response.body;

    expect(planetData.name).toBe("Tatooine");
    expect(planetData.climate).toBe("arid");
    expect(planetData.terrain).toContain("desert");
  });
});
