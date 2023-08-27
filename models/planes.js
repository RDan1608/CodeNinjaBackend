var mongoose = require('mongoose');

var planesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    caracteristicas: { type: [String], default: [] },
    precio: { type: Number, required: true },
    duracion: { type: String },
    tipo: { type: String, enum: ['Gratuito', 'Avanzado', 'Premium', 'Empresarial'], required: true }
});

module.exports = mongoose.model('planes',planesSchema)