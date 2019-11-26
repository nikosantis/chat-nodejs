const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://niko-user_db:MONtonia2008@@cluster0-j71iy.mongodb.net/telegrom?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
console.log('[db] Conectada con éxito')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessages() {
  // return list
  const messages = await Model.find()
  return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })

  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessages,
  // get
  updateText: updateText
  // delete
}