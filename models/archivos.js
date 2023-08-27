var mongoose = require('mongoose');

var archivosSchema = new mongoose.Schema({
    nombre: String,
    formato: String,
    contenido: String,
    proyectoid: String,

});

module.exports = mongoose.model('archivos',archivosSchema)