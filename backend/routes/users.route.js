const express = require('express');
const services = require('./../services')
const { apis } = require('./../config/config')
const { users } = require('./../controllers')

const router = express.Router()

// dependency injection
const usersHandlers = users( services, apis.url_place_holder )

router.get('/', usersHandlers.get)
router.post('/', usersHandlers.post)
router.put('/:id', usersHandlers.put)
router.delete('/:id', usersHandlers.delete)

module.exports = router