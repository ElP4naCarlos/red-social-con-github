const mongoose = require('mongoose');

// Esquema del modelo de Usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Asegura que el correo se guarde en minúsculas
    match: [/\S+@\S+\.\S+/, 'Por favor, ingresa un correo válido'] // Valida el formato del correo
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
    min: 18, // Edad mínima para el usuario
    max: 120 // Edad máxima para el usuario
  },
  // Agrega otros campos que consideres necesarios para un usuario
}, {
  timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

// Crear el modelo de Usuario basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
