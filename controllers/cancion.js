let Cancion = require('../models/cancion')

const controller = {
  getCanciones: function (req, res) {
    Cancion.find({}).exec()
      .then(listaCanciones => {
        if (!listaCanciones) return res.status(404).send({ message: "No se encontraron datos" })
        return res.status(200).json(listaCanciones)
      })
      .catch(err => res.status(500).send({ message: `Error: ${err}` }))
  },
  getCancion: function (req, res) {
    let cancionId = req.params.id
    if (cancionId == null) return res.status(404).send({ message: "Canción no encontrada" })

    Cancion.findById(cancionId).exec()
      .then(data => {
        if (!data) return res.status(404).send({ message: "Canción no encontrada" })
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({ message: `Error interno -> ${err}` }))
  },
  saveCancion: function (req, res) {
    let cancion = new Cancion()
    const { titulo, artista, album, anio, duracion, genero, colaboradores } = req.body
    if (titulo && artista) {
      cancion.titulo = titulo
      cancion.artista = artista
      cancion.album = album
      cancion.anio = anio
      cancion.duracion = duracion
      cancion.genero = genero
      cancion.colaboradores = colaboradores || null

      cancion.save()
        .then(cancionGuardada => {
          cancionGuardada
            ? res.status(200).json({ cancion: cancionGuardada })
            : res.status(404).send({ message: "Error al guardar el documento" })
        })
        .catch(error => res.status(500).send({ message: "Error al guardar el documento" }))
    } else {
      return res.status(400).send({ message: "Los datos no son correctos" })
    }
  },
  updateCancion: function (req, res) {
    let cancionId = req.params.id
    let update = req.body

    Cancion.findByIdAndUpdate(cancionId, update, { returnDocument: 'after' })
      .then(cancionActualizada => {
        if (!cancionActualizada) return res.status(404).send({ message: "El documento no existe" })
        return res.status(200).send({ cancion: cancionActualizada })
      })
      .catch(error => res.status(500).send({ message: `Error al actualizar ${error}` }))
  },
  deleteCancion: function (req, res) {
    let cancionId = req.params.id

    Cancion.findByIdAndRemove(cancionId)
      .then(cancionEliminada => {
        if (!cancionEliminada) return res.status(404).send({ message: "La canción no existe" })
        return res.status(200).send({ cancion: cancionEliminada })
      })
      .catch(err => res.status(500).send({ message: "Error al eliminar" }))
  }
}

module.exports = controller
