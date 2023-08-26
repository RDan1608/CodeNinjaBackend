var express = require('express');
var router = express.Router();
var proyecto = require('../models/proyectos');


//Crear Nuevo Proyecto

router.post('/', function(req, res) {
  let u = new proyecto(
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
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

//Actuliazar Proyecto
router.put('/:id', async function(req, res) {
  try {
    const updatedData = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,

    };

    const result = await proyecto.updateOne({ _id: req.params.id }, updatedData);
    console.log('User updated:', result);
    res.send(result);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send(err);
  }
});





//ver Carpeta en Especifico
router.get('/:id', function(req, res) {

    proyecto.find({_id: req.params.id})
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

//Ver todas las Carpetas
router.get('/', function(req, res) {
      proyecto.find().then(result=>{
        res.send(result);
        res.end();
      }).catch(err=>{
        res.send(err);
        res.end();
      });
      
})

// Eliminar Carpeta
router.delete('/:idCarpeta', async (req, res) => {
    try {
      const idCarpeta = req.params.idCarpeta;
  
      // Verifica si el usuario existe
      const Existecarpeta = await proyecto.findById(idCarpeta);
      if (!Existeucarpeta) {
        return res.status(404).json({ mensaje: 'proyecto no encontrada' });
      }
  
      // Elimina el usuario
      await proyecto.findByIdAndDelete(idCarpeta);
  
      res.status(200).json({ mensaje: 'proyecto eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });


  module.exports = router;