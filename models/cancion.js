let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CancionSchema = Schema({
  titulo: String,
  artista: { type: Schema.Types.ObjectId, ref: 'Artista' },
  album: { type: Schema.Types.ObjectId, ref: 'Album' },
  anio: Number,
  duracion: Number, // duración en segundos
  genero: String,
  colaboradores: [{ nombre: String, rol: String }]
})

module.exports = mongoose.model('Cancion', CancionSchema, 'canciones')
