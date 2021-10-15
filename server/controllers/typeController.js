const {Type} = require('../models/models')
const ApiError = require('../errors/ApiError')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest({message: e.message}))
        }

    }

    async getAll(req, res, next) {
        try {
            const types = await Type.findAll()
            return res.json(types)

        } catch (e) {
            next(ApiError.badRequest({message: e.message}))
        }

    }
}

module.exports = new TypeController()
