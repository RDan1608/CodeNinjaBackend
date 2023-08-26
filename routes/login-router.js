var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuarios');


//login endpoint
router.post('/', async (req, res) => {
    try {
      const { nombreUsuario, contraseña } = req.body;
  
      // Buscar el usuario por nombre y contraseña
      const usuarioEncontrado = await Usuario.findOne({ nombreUsuario, contraseña });
  
      if (!usuarioEncontrado) {
        return res.status(404).json({ Codigo:0, mensaje: 'Credenciales inválidas' });
      }
  
      res.status(200).json({
        Codigo: 1,
        mensaje: 'Inicio de sesión exitoso',
        userData: {
          userId: usuarioEncontrado._id, // Assuming user has _id property
          nombre: usuarioEncontrado.nombre, // Example user data fields
          email: usuarioEncontrado.email
          // Include other user data fields as needed
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });
  
  module.exports = router;
