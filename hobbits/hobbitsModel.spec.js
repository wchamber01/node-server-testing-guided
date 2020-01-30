const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

beforeEach(async () => {
  await db('hobbits').truncate()
})

describe('Hobbits model', () => {
  describe('insert()', () => {
    it('inserts the correct number of hobbits', async () => {
      // setup
      await Hobbits.insert({ name: 'sam' })
      await Hobbits.insert({ name: 'frodo' })
      const hobbits = await db('hobbits')
      // assertion
      expect(hobbits).toHaveLength(2)
    })

    it('inserts the hobbits without breaking them', async () => {
      const hobbit = await Hobbits.insert({ name: 'sam' })
      expect(hobbit).toMatchObject({ name: 'sam' })
    })

    it('can find a hobbit in the db', async () => {
      // first we need a hobbit actually there
      // remember the db gets truncated after each test
      // don't entangle yourself with other model functions
      await db('hobbits').insert({ name: 'sam' })
      const sam = await Hobbits.findById(1)
      expect(sam).toMatchObject({ name: 'sam' })
    })
  })
})
