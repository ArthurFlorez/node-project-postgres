const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')
const config = require('./config')
const db = require('./db.config')

// force: true --> Elima la tabla si ya existe en la base de datos
db.sequelize.sync({force: false}).then(() => {
    console.log('Realiza un Drop a la table y se reconecta con { force: true }');
  });

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
router(app)

app.use( config.publicRoute , express.static('public'))
app.listen( config.port ) 
console.log( `La aplicación está escuchando en ${config.host}:${config.port}${config.publicRoute}` ) 
