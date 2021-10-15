require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 7000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const routers = require('./routes/index')
const errorHandler = require('./midlleware/ErrorHandlingMidlleware')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
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
