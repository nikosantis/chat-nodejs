const db = require('mongoose')

db.Promise = global.Promise

// 'mongodb+srv://niko-user_db:MONtonia2008@@cluster0-j71iy.mongodb.net/telegrom?retryWrites=true&w=majority'

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
