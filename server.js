const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const { config } = require('./config')
const db = require('./db')

const PORT = config.port
const ROUTE = config.publicRoute

db(MONGO_URI)

const router = require('./network/routes')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server)

router(app)

app.use(ROUTE, express.static('public'))

server.listen(PORT, function() {
  console.log(`La aplicación se está escuchando en http://localhost:${PORT}`)
})
