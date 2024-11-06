const request = require('supertest');

describe('Testando detalhes dos filmes', () => {
  it('Deve listar todos os filmes da série Star Wars', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/films/')
      .expect(200);

    expect(response.body.count).toBe(6);
  });
});
