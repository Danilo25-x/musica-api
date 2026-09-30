let mongoose = require('mongoose')
let Schema = mongoose.Schema

let AlbumSchema = Schema({
  titulo: String,
  artista: { type: Schema.Types.ObjectId, ref: 'Artista' },
  anio: Number,
  portada: String
})

module.exports = mongoose.model('Album', AlbumSchema, 'albumes')
