let Artista = require('../models/artista')

const controller = {
  getArtistas: function (req, res) {
    Artista.find({}).exec()
      .then(listaArtistas => {
        if (!listaArtistas) return res.status(404).send({ message: "No se encontraron datos" })
        return res.status(200).json(listaArtistas)
      })
      .catch(err => res.status(500).send({ message: `Error: ${err}` }))
  },
  getArtista: function (req, res) {
    let artistaId = req.params.id
    if (artistaId == null) return res.status(404).send({ message: "Artista no encontrado" })

    Artista.findById(artistaId).exec()
      .then(data => {
        if (!data) return res.status(404).send({ message: "Artista no encontrado" })
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({ message: `Error interno -> ${err}` }))
  },
  saveArtista: function (req, res) {
    let artista = new Artista()
    const { nombre, biografia, paisOrigen, generos } = req.body
    if (nombre) {
      artista.nombre = nombre
      artista.biografia = biografia
      artista.paisOrigen = paisOrigen
      artista.generos = generos || null

      artista.save()
        .then(artistaGuardado => {
          artistaGuardado
            ? res.status(200).json({ artista: artistaGuardado })
            : res.status(404).send({ message: "Error al guardar el documento" })
        })
        .catch(error => res.status(500).send({ message: "Error al guardar el documento" }))
    } else {
      return res.status(400).send({ message: "Los datos no son correctos" })
    }
  },
  updateArtista: function (req, res) {
    let artistaId = req.params.id
    let update = req.body

    Artista.findByIdAndUpdate(artistaId, update, { returnDocument: 'after' })
      .then(artistaActualizado => {
        if (!artistaActualizado) return res.status(404).send({ message: "El documento no existe" })
        return res.status(200).send({ artista: artistaActualizado })
      })
      .catch(error => res.status(500).send({ message: `Error al actualizar ${error}` }))
  },
  deleteArtista: function (req, res) {
    let artistaId = req.params.id

    Artista.findByIdAndRemove(artistaId)
      .then(artistaEliminado => {
        if (!artistaEliminado) return res.status(404).send({ message: "El artista no existe" })
        return res.status(200).send({ artista: artistaEliminado })
      })
      .catch(err => res.status(500).send({ message: "Error al eliminar" }))
  }
}

module.exports = controller
