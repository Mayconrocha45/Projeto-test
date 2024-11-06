const request = require('supertest');
const axios = require('axios');

describe('Testando o endpoint de personagens (people)', () => {
  it('Deve retornar os dados de Luke Skywalker', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/people/1/')
      .expect(200);

    const lukeData = response.body;

    expect(lukeData.name).toBe("Luke Skywalker");
    expect(lukeData.height).toBe("172");
    expect(lukeData.mass).toBe("77");
    expect(lukeData.hair_color).toBe("blond");
    expect(lukeData.skin_color).toBe("fair");
    expect(lukeData.eye_color).toBe("blue");
    expect(lukeData.birth_year).toBe("19BBY");
  });
});
