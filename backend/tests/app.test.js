// backend/tests/app.test.js
const request = require('supertest');
const createApp = require('../src/app');

describe('Basic server', () => {
  let app;
  beforeAll(() => {
    app = createApp();
  });

  test('health endpoint', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
