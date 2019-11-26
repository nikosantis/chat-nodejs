require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  publicRoute: process.env.PUBLIC_ROUTE || '/app'
}

module.exports = { config }
