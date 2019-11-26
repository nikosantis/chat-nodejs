const store = require('./store')

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay chat, usuario o mensaje')
      return reject('Los datos son incorrectos')
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date()
    }

    store.add(fullMessage)

    resolve(fullMessage)
  })
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat))
  })
}

async function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(id)
    console.log(message)
    if (!id || !message) {
      return reject('Invalid data')
    }

    const result = await store.updateText(id, message)

    resolve(result)
  })
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id inválido')
      return false
    }

    store.remove(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}
