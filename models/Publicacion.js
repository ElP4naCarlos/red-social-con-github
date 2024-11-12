const mongoose = require('mongoose');

// Esquema de la publicación
const publicacionSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: [true, 'El contenido es obligatorio'], // El campo es obligatorio
    trim: true
  },
  multimedia: {
    type: String,
    required: false // Este campo es opcional
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuarioId es obligatorio'] // Este campo es obligatorio
  }
}, {
  timestamps: true
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);

module.exports = Publicacion;
