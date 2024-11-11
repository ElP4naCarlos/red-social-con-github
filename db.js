const mongoose = require('mongoose');

// URL de conexión a MongoDB (modifícala si usas MongoDB Atlas)
const MONGODB_URI = 'mongodb://localhost:27017/nombre_base_datos'; // Cambia 'nombre_base_datos'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;
