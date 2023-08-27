var mongoose = require('mongoose');

var proyectosSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    carpetaid: String,
    archivos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'archivos' }],
    fecha_creacion: { type: Date, default: Date.now },
    fecha_actualizacion: { type: Date, default: Date.now }

});

module.exports = mongoose.model('proyectos',proyectosSchema)