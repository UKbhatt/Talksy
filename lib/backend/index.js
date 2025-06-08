const express = require('express')
const User = require("routes/UserRoutes.js")
const app = express.Router()

app.use("/user", User)