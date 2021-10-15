const Routes = require('express')
const TypeController = require('../controllers/typeController')
const roleMiddleware = require('../midlleware/checkRoleMiddlewate')


const router = new Routes()

router.post('/', roleMiddleware('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
