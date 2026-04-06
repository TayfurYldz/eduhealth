const request = require('supertest');
const app = require('../src/server');
describe('GET /users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});