const Publicacion = require('../models/publicacion'); // Modelo de Publicación

class PublicacionesController {
  
  // Listar todas las publicaciones
  static async listarPublicaciones(req, res) {
    try {
      const publicaciones = await Publicacion.find().populate('usuarioId'); // Rellenar la referencia del usuario
      res.status(200).json(publicaciones);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al listar publicaciones", error });
    }
  }

  // Crear una nueva publicación
  static async crearPublicacion(req, res) {
    const { contenido, multimedia, usuarioId } = req.body; // Cambiar a usuarioId

    try {
      const nuevaPublicacion = new Publicacion({
        contenido,
        multimedia,
        usuarioId // Asegúrate de usar usuarioId en lugar de usuario
      });
      
      await nuevaPublicacion.save();
      res.status(201).json(nuevaPublicacion);
    } catch (error) {
      res.status(400).json({ mensaje: "Error al crear publicación", error });
    }
  }

  // Obtener una publicación por su ID
  static async obtenerPublicacionPorId(req, res) {
    const { id } = req.params;

    try {
      const publicacion = await Publicacion.findById(id).populate('usuarioId');
      if (!publicacion) {
        return res.status(404).json({ mensaje: "Publicación no encontrada" });
      }
      res.status(200).json(publicacion);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener publicación", error });
    }
  }

  // Editar una publicación
  static async editarPublicacion(req, res) {
    const { id } = req.params;
    const { contenido, multimedia } = req.body;

    try {
      const publicacion = await Publicacion.findById(id);
      if (!publicacion) {
        return res.status(404).json({ mensaje: "Publicación no encontrada" });
      }

      publicacion.contenido = contenido || publicacion.contenido;
      publicacion.multimedia = multimedia || publicacion.multimedia;

      await publicacion.save();
      res.status(200).json(publicacion);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al editar publicación", error });
    }
  }

  // Eliminar una publicación
  static async eliminarPublicacion(req, res) {
    const { id } = req.params;

    try {
      const publicacion = await Publicacion.findByIdAndDelete(id);
      if (!publicacion) {
        return res.status(404).json({ mensaje: "Publicación no encontrada" });
      }

      res.status(200).json({ mensaje: `Publicación con ID ${id} eliminada` });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al eliminar publicación", error });
    }
  }
}

module.exports = PublicacionesController;
