const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json('Пользователь не авторизован')
            }
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
            if(decodedToken.role !== role){
                return res.status(401).json({message: 'Доступ запрещен'})
            }
            req.user = decodedToken
            next()
        } catch (e) {
            res.status(401).json('Пользователь не авторизован')
        }


    }
}
