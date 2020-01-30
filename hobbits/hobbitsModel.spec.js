const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('Hobbits model', () => {
  describe('insert()', () => {
    it('inserts hobbits into the db', async () => {
      // setup
      await Hobbits.insert({ name: 'sam' })
      await Hobbits.insert({ name: 'frodo' })
      const hobbits = await db('hobbits')
      // assertion
      expect(hobbits).toHaveLength(2)
    })
  })
})
