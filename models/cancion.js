let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CancionSchema = Schema({
  titulo: String,
  artista: String,
  album: String,
  anio: Number,
  duracion: Number, // duración en segundos
  genero: String,
  colaboradores: [{ nombre: String, rol: String }]
})

module.exports = mongoose.model('Cancion', CancionSchema, 'canciones')
