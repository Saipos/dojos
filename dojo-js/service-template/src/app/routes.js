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

module.exports = routes
