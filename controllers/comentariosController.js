class ComentariosController {
  // Variable temporal para almacenar comentarios
  static comentarios = [];

  // Agregar un comentario
  static agregarComentario(req, res) {
    const { publicacionId, contenido } = req.body;

    const nuevoComentario = {
      id: ComentariosController.comentarios.length + 1,
      publicacionId,
      contenido,
    };

    ComentariosController.comentarios.push(nuevoComentario);
    res.status(201).json(nuevoComentario);
  }

  // Listar comentarios de una publicación
  static listarComentarios(req, res) {
    const { publicacionId } = req.params;

    const comentariosPublicacion = ComentariosController.comentarios.filter(
      (c) => c.publicacionId == publicacionId
    );

    if (comentariosPublicacion.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron comentarios para esta publicación." });
    }

    res.status(200).json(comentariosPublicacion);
  }

  // Listar todos los comentarios
  static listarTodosComentarios(req, res) {
    if (ComentariosController.comentarios.length === 0) {
      return res.status(404).json({ mensaje: "No hay comentarios disponibles." });
    }

    res.status(200).json(ComentariosController.comentarios);
  }

  // Editar un comentario
  static editarComentario(req, res) {
    const { id } = req.params;
    const { contenido } = req.body;

    const comentario = ComentariosController.comentarios.find(c => c.id == id);

    if (!comentario) {
      return res.status(404).json({ mensaje: "Comentario no encontrado" });
    }

    // Actualizar el contenido del comentario
    comentario.contenido = contenido || comentario.contenido;

    res.status(200).json(comentario); // Retorna el comentario actualizado
  }

  // Eliminar un comentario
  static eliminarComentario(req, res) {
    const { id } = req.params;
    ComentariosController.comentarios = ComentariosController.comentarios.filter(
      (c) => c.id != id
    );
    res.status(200).json({ mensaje: `Comentario con ID ${id} eliminado` });
  }
}

module.exports = ComentariosController;
