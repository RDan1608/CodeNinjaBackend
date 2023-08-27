var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');

//Crear un Usuario
router.post('/', function(req, res) {
  let u = new usuario(
    {
      nombreUsuario: req.body.nombreUsuario,
      correo: req.body.correo,
      contraseña: req.body.contraseña,
      biografia: null,
      nombre: {
        primerNombre: null,
        apellido: null
      },
      foto: null,
      profesion: null,
      industria: null,
      situacion_laboral: null,
      enlace_empresa: null,
      planId:"64e978223423fdf95e1cc4d7",
      contadorProyectos:0
    }
);
  u.save().then(result=>{
    res.send(result);
    res.end();
  }).catch(err=>{
    res.send(err);
    res.end();
  });;
});


//Ver Usuario en especifico
router.get('/:id', function(req, res) {

    usuario.find({_id: req.params.id})
      .then(user => {
        if (!user) {
          res.send({ codigo: 0, mensaje: 'Registro No Existe' });
        } else {
          res.send(user[0]);
        }
      })
      .catch(err => {
        res.send(err);
      });
  });

//Ver todos los Usuarios
router.get('/', function(req, res) {
      usuario.find().then(result=>{
        res.send(result);
        res.end();
      }).catch(err=>{
        res.send(err);
        res.end();
      });
      
})
//Actulizar datos del usuario
router.put('/:id', async function(req, res) {
  try {
    const updatedData = {
      correo: req.body.correo,
      contraseña: req.body.contraseña,
      biografia: req.body.biografia,
      nombre: {
        primerNombre: req.body.primerNombre,
        apellido: req.body.apellido
      },
      foto: req.body.foto,
      profesion: req.body.profesion,
      industria: req.body.industria,
      situacion_laboral: req.body.situacion_laboral,
      enlace_empresa: req.body.enlace_empresa,
      planId: req.body.planId,
      contadorProyectos:req.body.contadorProyectos,
    };

    const result = await usuario.updateOne({ _id: req.params.id }, updatedData);
    console.log('User updated:', result);
    res.send(result);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send(err);
  }
});


// Eliminar Usuario
router.delete('/:idUsuario', async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;

    // Verifica si el usuario existe
    const Existeusuario = await usuario.findById(idUsuario);
    if (!Existeusuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Elimina el usuario
    await usuario.findByIdAndDelete(idUsuario);

    res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});



module.exports = router;