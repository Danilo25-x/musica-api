const { Router } = require('express')
const AlbumController = require('../controllers/album')

const router = Router()

router.get('/', AlbumController.getAlbumes)
router.get('/:id?', AlbumController.getAlbum)
router.post('/guardar-album', AlbumController.saveAlbum)
router.put('/editar-album/:id?', AlbumController.updateAlbum)
router.delete('/eliminar-album/:id?', AlbumController.deleteAlbum)

module.exports = router
