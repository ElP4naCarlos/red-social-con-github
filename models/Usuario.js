const mongoose = require('mongoose');

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
    lowercase: true, 
    match: [/\S+@\S+\.\S+/, 'Por favor, ingresa un correo válido']
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  edad: {
    type: Number,
    min: 18, 
    max: 120 
  },
}, {
  timestamps: true
});

// Función para calcular la edad
usuarioSchema.pre('save', function (next) {
  if (this.fechaNacimiento) {
    const today = new Date();
    const birthDate = new Date(this.fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.edad = age;  // Calculamos y asignamos la edad antes de guardar el usuario
  }
  next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
