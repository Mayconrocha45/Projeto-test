const request = require('supertest');

describe('Testando o endpoint de espécies (species)', () => {
  it('Deve retornar os dados de uma espécie específica', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/species/1/')
      .expect(200);

    const speciesData = response.body;

    expect(speciesData.name).toBe("Human");
    expect(speciesData.classification).toBe("mammal");
    expect(speciesData.language).toBe("Galactic Basic");
  });
});
