const request = require('supertest')
const app = require('../src/app')

const modelMock = {
  theater: '11111',
  createdAt: '2020-01-01',
  expirateDate: '2020-01-01',
  status: true,
  movies: ['1', '2']
}

describe('Catalog', () => {

  it('It should return success', async () => {
    const response = await request(app).get('/catalogs/theaters/1')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(modelMock)
  })

})
