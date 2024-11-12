const Usuario = require('../models/usuario'); // Importar el modelo de Usuario

class UsuariosController {
  // Listar todos los usuarios
  static async listarUsuarios(req, res) {
    try {
      const usuarios = await Usuario.find(); // Buscar todos los usuarios en la base de datos
      res.status(200).json(usuarios); // Responde con la lista de usuarios
    } catch (error) {
      res.status(500).json({ mensaje: "Error al listar usuarios", error });
    }
  }

  // Crear un nuevo usuario
  static async crearUsuario(req, res) {
    const { nombre, correo, fechaNacimiento } = req.body;

    try {
      const nuevoUsuario = new Usuario({ nombre, correo, fechaNacimiento });
      await nuevoUsuario.save(); // Guardar el nuevo usuario en la base de datos
      res.status(201).json(nuevoUsuario); // Devolver el usuario creado
    } catch (error) {
      res.status(400).json({ mensaje: "Error al crear usuario", error });
    }
  }

  // Obtener un usuario por su ID
  static async obtenerUsuarioPorId(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findById(id); // Buscar el usuario por su ID
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
      res.status(200).json(usuario); // Devolver el usuario encontrado
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener usuario", error });
    }
  }

  // Editar un usuario
  static async editarUsuario(req, res) {
    const { id } = req.params;
    const { nombre, correo, fechaNacimiento } = req.body;

    try {
      const usuario = await Usuario.findByIdAndUpdate(
        id,
        { nombre, correo, fechaNacimiento },
        { new: true } // Esto asegura que nos devuelvan el documento actualizado
      );
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
      res.status(200).json(usuario); // Devolver el usuario actualizado
    } catch (error) {
      res.status(500).json({ mensaje: "Error al editar usuario", error });
    }
  }

  // Eliminar un usuario
  static async eliminarUsuario(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findByIdAndDelete(id); // Eliminar el usuario por su ID
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
      res.status(200).json({ mensaje: `Usuario con ID ${id} eliminado` });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar usuario", error });
    }
  }
}

module.exports = UsuariosController;
