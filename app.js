const express = require('express')
const cancion_routes = require('./routes/cancion')
const artista_routes = require('./routes/artista')
const album_routes = require('./routes/album')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// rutas
app.use('/api/canciones', cancion_routes)
app.use('/api/artistas', artista_routes)
app.use('/api/albumes', album_routes)

module.exports = app
