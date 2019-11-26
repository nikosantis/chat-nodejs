
const Model = require('./model')

function addUser(user) {
  const myUser = new Model(user)
  return myUser.save()
}

async function listUsers() {
  return Model.find()
}

module.exports = {
  add: addUser,
  list: listUsers
}
