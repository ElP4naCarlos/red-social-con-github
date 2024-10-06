class UsuariosController {
  // Variable temporal para almacenar usuarios
  static usuarios = [];

  // Listar todos los usuarios
  static listarUsuarios(req, res) {
    res.status(200).json(UsuariosController.usuarios); // Responde con la lista completa de usuarios en formato JSON
  }

  // Crear un nuevo usuario
  static crearUsuario(req, res) {
    const { nombre, email } = req.body;
    
    // Crear un nuevo usuario con ID autogenerado
    const nuevoUsuario = {
      id: UsuariosController.usuarios.length + 1,
      nombre: nombre,
      email: email
    };

    // Agregar el usuario a la lista de usuarios
    UsuariosController.usuarios.push(nuevoUsuario);

    // Responder con el usuario creado
    res.status(201).json(nuevoUsuario); // Devolvemos el nuevo usuario creado en la respuesta
  }

  // Obtener un usuario por su ID
  static obtenerUsuarioPorId(req, res) {
    const { id } = req.params;

    // Buscar el usuario por su ID
    const usuario = UsuariosController.usuarios.find(u => u.id == id);

    // Si no se encuentra el usuario, devolver un error 404
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Devolver el usuario encontrado
    res.status(200).json(usuario);
  }

  // Editar un usuario
  static editarUsuario(req, res) {
    const { id } = req.params;
    const { nombre, email } = req.body;

    // Buscar el usuario por ID
    const usuario = UsuariosController.usuarios.find(u => u.id == id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Actualizar los datos del usuario
    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;

    res.status(200).json(usuario); // Devolvemos el usuario actualizado
  }

  // Eliminar un usuario
  static eliminarUsuario(req, res) {
    const { id } = req.params;

    // Filtrar el array para eliminar el usuario con el ID especificado
    UsuariosController.usuarios = UsuariosController.usuarios.filter(u => u.id != id);

    res.status(200).json({ mensaje: `Usuario con ID ${id} eliminado` });
  }
}

module.exports = UsuariosController;
