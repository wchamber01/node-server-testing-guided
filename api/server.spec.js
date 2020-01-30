const server = require('./server')
const request = require('supertest')

describe('server.js module', () => {
  it('has the right environment for DB_ENV', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('up endpoint', () => {

    it('returns a 200 OK async/await', async () => {
      const res = await request(server).get('/')
    })

    it('returns a 200 OK ES6 promises', () => {

    })

    it('returns a 200 OK supertest', () => {

    })
  })
})