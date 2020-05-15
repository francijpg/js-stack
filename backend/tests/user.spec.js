const handlers = require('../controllers/users')

describe('controllers', () => {
    describe('user.spec', () => {
        describe('get', () => {
            it('returns a list of users in json format', async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1})
                }
                const api = jest.fn()
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                
                await handlers({ axios }, api).get({}, res)

                expect(res.status.mock.calls).toEqual([
                    [200]
                ])
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
            })
        })
    })
})