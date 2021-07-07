const { Router } = require('express')
const routes = Router()

/**
 * Controllers
 */
const Main = require('./controllers/main')
const Catalogs = require('./controllers/catalogs')

/**
 * Routes
 */
routes.get('/', Main.get)

routes.get('/catalogs/theaters/:threaterId', Catalogs.getTheatersById)

routes.post('/catalogs/movies', Catalogs.createMovie)

routes.post('/catalogs/status/:idStatus', Catalogs.updateMovieStatus)

routes.delete('/catalogs/movies/:idMovie', Catalogs.deleteMovie)

module.exports = routes
