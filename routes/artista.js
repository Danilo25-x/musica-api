const { Router } = require('express')
const ArtistaController = require('../controllers/artista')

const router = Router()

router.get('/', ArtistaController.getArtistas)
router.get('/:id?', ArtistaController.getArtista)
router.post('/guardar-artista', ArtistaController.saveArtista)
router.put('/editar-artista/:id?', ArtistaController.updateArtista)
router.delete('/eliminar-artista/:id?', ArtistaController.deleteArtista)

module.exports = router
