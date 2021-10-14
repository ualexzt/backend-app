const Routes = require('express')
const TypeController = require('../controllers/typeController')

const router = new Routes()

router.post('/', TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
