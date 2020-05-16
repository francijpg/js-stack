const request = require('supertest')
const app = require('../config/express')
const { 
    mockUsers,
    appVersion,
    setupDatabase,
    User
} = require('./fixtures/db')

beforeEach(setupDatabase)

describe('tests', () => {
    describe('user.test', () => {
        it('get the users', async () => {
            const response = await request(app)
                .get(appVersion +'/users')
                .send(mockUsers)
                .set('content-type', 'application/json')
            expect(response.body).not.toHaveLength(0)
            expect(response.statusCode).toEqual(200)
        });
        it('creates a new user', async () => {
            await User.deleteMany()
            const response = await request(app)
                .post(appVersion +'/users')
                .send(mockUsers)
                .set('content-type', 'application/json')
            expect(response.statusCode).toEqual(201)
        });
        it('does not creates a new user', async () => {
            const response = await request(app)
                .post(appVersion +'/users')
                .send(mockUsers)
                .set('content-type', 'application/json')
            expect(response.statusCode).toEqual(400)
        });
        it('update data from a user', async () => {
            const id = mockUsers.id
            const response = await request(app)
                .put(appVersion + `/users/${id}`)
                .set('content-type', 'application/json')
            await User.findOneAndUpdate(id,{ $set: 
                {
                    "name": "my_name",
                    "username": "my_user"
                }
            })
            expect(response.statusCode).toEqual(204)
        });
        it('delete a user', async () => {
            const id = mockUsers.id
            const response = await request(app)
                .delete(appVersion + `/users/${id}`)
                .set('content-type', 'application/json')
            await User.findOneAndDelete(id)
            expect(response.statusCode).toEqual(204)
        });
    });
});