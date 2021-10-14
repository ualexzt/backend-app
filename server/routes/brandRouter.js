const Routes = require('express')
const BrandController = require('../controllers/brandController')


const router = new Routes()

router.post('/', BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router
