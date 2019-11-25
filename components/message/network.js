const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor personalizado",
  })
  response.succes(req, res, 'Lista de mensajes')
})

router.post('/', function (req, res) {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.succes(req, res, fullMessage, 201)
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400, 'Error en el controller')
    })
})

module.exports = router
