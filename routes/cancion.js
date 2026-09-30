const { Router } = require('express')
const CancionController = require('../controllers/cancion')

const router = Router()

router.get('/', CancionController.getCanciones)
router.get('/:id?', CancionController.getCancion)
router.post('/guardar-cancion', CancionController.saveCancion)
router.put('/editar-cancion/:id?', CancionController.updateCancion)
router.delete('/eliminar-cancion/:id?', CancionController.deleteCancion)

module.exports = router
