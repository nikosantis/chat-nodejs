const db = require('mongoose')
const { config } = require('./config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)

module.exports = MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

db.Promise = global.Promise

async function connect(url) {
  await db.connect(url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  console.log('[db] Conectada con éxito')
}

module.exports = connect
