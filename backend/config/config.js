const dotenv = require('dotenv')

if (process.env.NODE_ENV === "production"){
  dotenv.config({ path: __dirname + '/../../.env' })
}
if (process.env.NODE_ENV === "test"){
  dotenv.config({ path: __dirname + '/../../.env.test' })
}
if (process.env.NODE_ENV === "development"){
  dotenv.config({ path: __dirname + '/../../.env.development' })
}

const config = {
  appConfig: {
    port: process.env.BACKEND_PORT,
    version: process.env.BACKEND_VERSION,
    environment: process.env.NODE_ENV
  },
  dbConfig: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME
  },
  apis: {
    url_place_holder: process.env.API_JSON_PLACE_HOLDER
  }
}

module.exports = config