let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ArtistaSchema = Schema({
  nombre: String,
  biografia: String,
  paisOrigen: String,
  generos: [String]
})

module.exports = mongoose.model('Artista', ArtistaSchema, 'artistas')
