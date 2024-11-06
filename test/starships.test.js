const request = require('supertest');

describe('Testando o endpoint de naves estelares (starships)', () => {
  it('Deve retornar os dados da Estrela da Morte', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/starships/9/')
      .expect(200);

    const starshipData = response.body;

    expect(starshipData.name).toBe("Death Star");
    expect(starshipData.model).toBe("DS-1 Orbital Battle Station");
    expect(starshipData.manufacturer).toContain("Imperial Department");
    expect(starshipData.crew).toBe("342,953");
  });
});
