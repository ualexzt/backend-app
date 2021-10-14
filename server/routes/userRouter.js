const Routes = require('express')
const UserController = require('../controllers/userController')

const router = new Routes()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/auth', UserController.check)


module.exports = router
