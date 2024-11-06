const request = require('supertest');

describe('Testando o endpoint de veículos (vehicles)', () => {
  it('Deve retornar os dados de um veículo específico', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/vehicles/14/')
      .expect(200);

    const vehicleData = response.body;

    expect(vehicleData.name).toBe("Snowspeeder");
    expect(vehicleData.model).toBe("t-47 airspeeder");
    expect(vehicleData.manufacturer).toContain("Incom corporation");
  });
});
