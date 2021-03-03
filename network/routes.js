// const express = require('express')
// const { route } = require('../components/representante_legal/network')
// const representante_legal = require('../components/representante_legal/network')

// const routes = function( server ) {
//     server.use('/representante_legal', representante_legal)
// }

// module.exports = routes

const { dirname } = require('path');
const path = require('path')
// console.log('ruta ---------> ' , path.resolve(__dirname,'../components/representante_legal/controller.js'))


module.exports = function(app) {
    const representantes_legales = require(path.resolve(__dirname,'../components/representante_legal/controller.js'));
    
 
    // Crear un respresentante
    app.post('/representante_legal', representantes_legales.create);
 
    // Retorna los representantes
    app.get('/representante_legal', representantes_legales.findAll);
 
    // Retorna un representante por Id
    app.get('/representante_legal/:id', representantes_legales.findById);
 
    // Actualiza representante por Id
    app.put('/representante_legal', representantes_legales.update);
 
    // Eliminar representante por Id
    app.delete('/representante_legal/:id', representantes_legales.delete);
}