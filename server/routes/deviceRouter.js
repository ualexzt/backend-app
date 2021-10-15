const Routes = require('express')
const DeviceController = require('../controllers/deviceController')
const roleMiddleware = require('../midlleware/checkRoleMiddlewate')

const router = new Routes()

router.post('/', roleMiddleware('ADMIN'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)

module.exports = router
