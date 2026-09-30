const express = require('express')
const cancion_routes = require('./routes/cancion')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// rutas
app.use('/api/canciones', cancion_routes)

module.exports = app
