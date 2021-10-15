const Routes = require('express')
const UserController = require('../controllers/userController')
const authMiddlleware = require('../midlleware/authMiddleware')

const router = new Routes()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/auth', authMiddlleware, UserController.check)


module.exports = router
