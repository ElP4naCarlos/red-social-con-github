const mongoose = require('mongoose');

// Esquema del modelo de Publicación
const publicacionSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',  // Relaciona esta publicación con un usuario
    required: true
  },
  contenido: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  // Agrega otros campos como imágenes, etiquetas, etc.
}, {
  timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

// Crear el modelo de Publicación basado en el esquema
const Publicacion = mongoose.model('Publicacion', publicacionSchema);

module.exports = Publicacion;
