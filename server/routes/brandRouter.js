const Routes = require('express')
const BrandController = require('../controllers/brandController')
const roleMiddleware = require('../midlleware/checkRoleMiddlewate')


const router = new Routes()

router.post('/', roleMiddleware('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router
