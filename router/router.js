const { loginRoute, registerRoute } = require('../controller/controller')

const route=require('express').Router()


route.post('/login',loginRoute)
route.post('/register',registerRoute)

module.exports=route