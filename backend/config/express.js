const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const parser = require('body-parser')
const { appConfig } = require('./../config/config')
const routes = require('./../routes/index.route')

const app = express()

if(appConfig.environment === 'development'){
    app.use(morgan('dev'))
}

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false })) 
// parse application/json
app.use(parser.json())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// routes
app.use(appConfig.version, routes)

module.exports = app