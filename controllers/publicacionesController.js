class PublicacionesController {
    // Variable temporal para almacenar publicaciones
    static publicaciones = [];
  
    // Listar todas las publicaciones
    static listarPublicaciones(req, res) {
      res.status(200).json(PublicacionesController.publicaciones);
    }
  
    // Crear una nueva publicación
    static crearPublicacion(req, res) {
      const { titulo, descripcion, multimedia } = req.body;
  
      // Crear una nueva publicación con ID autogenerado
      const nuevaPublicacion = {
        id: PublicacionesController.publicaciones.length + 1,
        titulo,
        descripcion,
        multimedia
      };
  
      // Agregar la publicación a la lista de publicaciones
      PublicacionesController.publicaciones.push(nuevaPublicacion);
  
      // Responder con la publicación creada
      res.status(201).json(nuevaPublicacion);
    }
  
    // Obtener una publicación por su ID
    static obtenerPublicacionPorId(req, res) {
      const { id } = req.params;
      const publicacion = PublicacionesController.publicaciones.find(p => p.id == id);
  
      if (!publicacion) {
        return res.status(404).json({ mensaje: "Publicación no encontrada" });
      }
  
      res.status(200).json(publicacion);
    }
  
    // Editar una publicación
    static editarPublicacion(req, res) {
      const { id } = req.params;
      const { titulo, descripcion, multimedia } = req.body;
  
      const publicacion = PublicacionesController.publicaciones.find(p => p.id == id);
  
      if (!publicacion) {
        return res.status(404).json({ mensaje: "Publicación no encontrada" });
      }
  
      // Actualizar los datos de la publicación
      publicacion.titulo = titulo || publicacion.titulo;
      publicacion.descripcion = descripcion || publicacion.descripcion;
      publicacion.multimedia = multimedia || publicacion.multimedia;
  
      res.status(200).json(publicacion);
    }
  
    // Eliminar una publicación
    static eliminarPublicacion(req, res) {
      const { id } = req.params;
  
      PublicacionesController.publicaciones = PublicacionesController.publicaciones.filter(p => p.id != id);
  
      res.status(200).json({ mensaje: `Publicación con ID ${id} eliminada` });
    }
  }
  
  module.exports = PublicacionesController;
  