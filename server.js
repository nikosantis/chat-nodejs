const express = require('express')
const router = express.Router()

var app = express()

app.use(router)

router.get('/', function (req, res) {
  res.send('Hola desde /get')
})

router.post('/', function (req, res) {
  res.send('Hola desde /post')
})

router.patch('/', function (req, res) {
  res.send('Hola desde /patch')
})

router.delete('/', function (req, res) {
  res.send('Hola desde /delete')
})

// app.use('/', function(req, res) {
//   res.send('Hola')
// })

app.listen(3000)
console.log('La aplicación está escuchando en http://localhost:3000')
