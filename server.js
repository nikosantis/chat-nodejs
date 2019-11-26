const express = require('express')
const bodyParser = require('body-parser')
const { config } = require('./config')

const db = require('./db')

const PORT = config.dev
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

db(MONGO_URI)

const router = require('./network/routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router(app)

app.use('/app', express.static('public'))

app.listen(PORT)
console.log(`La aplicación se está escuchando en http://localhost:${PORT}`)
