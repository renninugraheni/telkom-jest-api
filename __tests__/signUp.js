const ep = require('../endpoints/epUsers');
const data = require('../data/data');
const schema = require('../schema/schemaPosts');

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('test api sign up user', () => {
    test('user can successfully sign up using valid data', async () => {
        const response = await ep.epPost(data.dataPost);
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.schema);
    });
});