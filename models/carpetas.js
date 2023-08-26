var mongoose = require('mongoose');

var capetasSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    usuarioid: String,
    proyectos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'proyectos' }],
    archivos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'archivos' }],
    fecha_creacion: { type: Date, default: Date.now },
    fecha_actualizacion: { type: Date, default: Date.now }

});

module.exports = mongoose.model('carpetas',capetasSchema)