const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const epPost = (data) => api.post('/users')
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*')
    .send(data)

module.exports = {
    epPost,
};