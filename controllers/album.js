let Album = require('../models/album')

const controller = {
  getAlbumes: function (req, res) {
    Album.find({}).exec()
      .then(listaAlbumes => {
        if (!listaAlbumes) return res.status(404).send({ message: "No se encontraron datos" })
        return res.status(200).json(listaAlbumes)
      })
      .catch(err => res.status(500).send({ message: `Error: ${err}` }))
  },
  getAlbum: function (req, res) {
    let albumId = req.params.id
    if (albumId == null) return res.status(404).send({ message: "Álbum no encontrado" })

    Album.findById(albumId).exec()
      .then(data => {
        if (!data) return res.status(404).send({ message: "Álbum no encontrado" })
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({ message: `Error interno -> ${err}` }))
  },
  saveAlbum: function (req, res) {
    let album = new Album()
    const { titulo, artista, anio, portada } = req.body
    if (titulo) {
      album.titulo = titulo
      album.artista = artista
      album.anio = anio
      album.portada = portada

      album.save()
        .then(albumGuardado => {
          albumGuardado
            ? res.status(200).json({ album: albumGuardado })
            : res.status(404).send({ message: "Error al guardar el documento" })
        })
        .catch(error => res.status(500).send({ message: "Error al guardar el documento" }))
    } else {
      return res.status(400).send({ message: "Los datos no son correctos" })
    }
  },
  updateAlbum: function (req, res) {
    let albumId = req.params.id
    let update = req.body

    Album.findByIdAndUpdate(albumId, update, { returnDocument: 'after' })
      .then(albumActualizado => {
        if (!albumActualizado) return res.status(404).send({ message: "El documento no existe" })
        return res.status(200).send({ album: albumActualizado })
      })
      .catch(error => res.status(500).send({ message: `Error al actualizar ${error}` }))
  },
  deleteAlbum: function (req, res) {
    let albumId = req.params.id

    Album.findByIdAndRemove(albumId)
      .then(albumEliminado => {
        if (!albumEliminado) return res.status(404).send({ message: "El álbum no existe" })
        return res.status(200).send({ album: albumEliminado })
      })
      .catch(err => res.status(500).send({ message: "Error al eliminar" }))
  }
}

module.exports = controller
