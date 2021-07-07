const request = require('supertest')
const app = require('../src/app')

const modelMock = {
  theater: '11111',
  createdAt: '2020-01-01',
  expirateDate: '2020-01-01',
  status: true,
  movies: ['1', '2']
}

const modelMovieMock = {
  title: 'Titulo',
  overview: 'Descrição do filme',
  runtime: 2999,
  releaseDate: '14/01/1995',
  images: 'www.google.com/images/capadofilme',
  genres: ['drama', 'suspense']
}

const modelStatusMock = {
  title: 'Titulo',
  status:  2
}

const modelIdMovieMock = {
  title: 'Titulo'
}

describe('Catalog', () => {

  it('It should return success', async () => {
    const response = await request(app).get('/catalogs/theaters/1')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(modelMock)
  })

  it('It should return success', async () => {
    const response = await request(app).post('/catalogs/movies')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(modelMovieMock)
  })

  it('It should return success', async () => {
    const response = await request(app).post('/catalogs/status/2')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(modelStatusMock)
  })

  it('It should return success', async () => {
    const response = await request(app).delete('/catalogs/movies/1')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(modelIdMovieMock)
  })

})
