const request = require('supertest')
const app = require('../../server')

describe('Server', () => {
    describe('Endpoints:', () => {
        describe('Post POST', () => {
            it('creates a new post', async () => {
                const response = await request(app)
                    .post('/')
                    .set('user_id', 1)
                    .set('Content-Type', 'application/json')
                    .send({ userId: 5 })
                expect(response.status).toEqual(201)
                expect(response.body).toHaveProperty('id')
            })
            it('does not creates a new post', async () => {
                const response = await request(app)
                    .post('/')
                    .set('user_id', 1)
                    .set('Content-Type', 'application/json')
                    .send({ userId: 100 })
                expect(response.status).toEqual(400)
            })
        })
    })
})