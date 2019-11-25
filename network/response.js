exports.succes = function (req, res, message, status) {
  res.status(status || 200).send({
    error: '',
    body: message
  })
}

exports.error = function (req, res, message, status, details) {
  console.error(`[Response error]: ${details}`)

  res.status(status || 500).send({
    error: message,
    body: ''
  })
}