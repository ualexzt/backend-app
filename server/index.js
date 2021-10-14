require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 7000
const cors = require('cors')
const routers = require('./routes/index')
const errorHandler = require('./midlleware/ErrorHandlingMidlleware')


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routers)
//Обработка ошибки должна быть в самом конце
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server run on ${PORT} port ....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
