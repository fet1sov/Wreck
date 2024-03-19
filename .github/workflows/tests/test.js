const { app } = require('../../../app.js');
const supertest = require('supertest');

describe('Client endpoints', () => {
    it('GET / Pinging game index', async () => {
        const response = await supertest(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});