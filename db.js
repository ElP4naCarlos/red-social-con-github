const mongoose = require('mongoose');

// URL de conexión a MongoDB (modifícala si usas MongoDB Atlas)
const MONGODB_URI = 'mongodb+srv://carlosrodriguez3152:C0J59pq7UdvSuuQg@redsocial.kryzs.mongodb.net/?retryWrites=true&w=majority&appName=RedSocial'; // Cambia 'nombre_base_datos'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;
