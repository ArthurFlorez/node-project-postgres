const { dirname } = require('path');
const path = require('path')

module.exports = function(app) {
    const representantes_legales = require(path.resolve(__dirname,'../components/representante_legal/controller.js'));
    
    // Crear un respresentante
    app.post('/representante_legal', representantes_legales.create);
 
    // Retorna los representantes
    app.get('/representante_legal', representantes_legales.findAll); 
 
    // Actualiza representante por Id
    app.put('/representante_legal', representantes_legales.update);
 
    // Eliminar representante por Id
    app.delete('/representante_legal/:id', representantes_legales.delete);
}