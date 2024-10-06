class AmistadesController {
    // Variable temporal para almacenar amistades
    static amistades = [];
  
    // Agregar una solicitud de amistad
    static agregarAmistad(req, res) {
      const { usuarioId, amigoId } = req.body;
  
      const nuevaAmistad = {
        id: AmistadesController.amistades.length + 1,
        usuarioId,
        amigoId,
        estado: 'pendiente', // estado puede ser 'pendiente', 'aceptada' o 'rechazada'
      };
  
      AmistadesController.amistades.push(nuevaAmistad);
      res.status(201).json(nuevaAmistad);
    }
  
    // Aceptar una solicitud de amistad
    static aceptarAmistad(req, res) {
      const { id } = req.params;
  
      const amistad = AmistadesController.amistades.find(a => a.id == id);
      if (!amistad) {
        return res.status(404).json({ mensaje: "Solicitud de amistad no encontrada" });
      }
  
      amistad.estado = 'aceptada'; // Cambiamos el estado a aceptada
      res.status(200).json(amistad);
    }
  
    // Eliminar una amistad
    static eliminarAmistad(req, res) {
      const { id } = req.params;
  
      AmistadesController.amistades = AmistadesController.amistades.filter(a => a.id != id);
      res.status(200).json({ mensaje: `Amistad con ID ${id} eliminada` });
    }
  
    // Listar todas las amistades
    static listarAmistades(req, res) {
      res.status(200).json(AmistadesController.amistades);
    }
  }
  
  module.exports = AmistadesController;
  