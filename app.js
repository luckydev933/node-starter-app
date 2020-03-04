const path       = require('path')
const express    = require('express')
const session    = require('express-session')
const SQL        = require('mssql')
const Mail       = require('nodemailer')
const sha256     = require('js-sha256')
const bodyParser = require('body-parser')
const cors       = require('cors')

require('dotenv').config()

const App = express()

App.use(express.static(path.join(__dirname, 'public')))
App.use(bodyParser.json())
App.use(cors())
App.use(session({resave: false, saveUninitialized: false, secret: 'x3x4fkfjkuiuer'}))

App.set('views', path.join(__dirname, '/api/views'))
App.set('view engine', 'ejs')

const PORT = process.env.PORT || 8000

App.listen(PORT, function(){
    console.log('Server Started on PORT '+PORT)
})