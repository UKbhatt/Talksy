const express = require('express')
const { SignUp}  = require('../controllers/user')
const app = express.Router() ; 

module.exports = app ;

app.post('/' , SignUp) ; 