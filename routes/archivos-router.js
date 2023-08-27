var express = require('express');
var router = express.Router();
var archivo = require('../models/archivos');


//Crear Nueva Carpeta

router.post('/', function(req, res) {
    let u = new archivo(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        contenido: req.body.contenido,
        proyectoid: req.body.proyectoid,
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
  
//Actulizar Archivos
router.put('/:id', async function(req, res) {
    try {
      const updatedData = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        contenido: req.body.contenido
      };
  
      const result = await archivo.updateOne({ _id: req.params.id }, updatedData);
      console.log('User updated:', result);
      res.send(result);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send(err);
    }
  });


//ver Carpeta en Especifico
router.get('/:id', function(req, res) {

    archivo.find({_id: req.params.id})
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
      archivo.find().then(result=>{
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
      const Existecarpeta = await archivo.findById(idCarpeta);
      if (!Existeucarpeta) {
        return res.status(404).json({ mensaje: 'archivo no encontrado' });
      }
  
      // Elimina el usuario
      await archivo.findByIdAndDelete(idCarpeta);
  
      res.status(200).json({ mensaje: 'archivo eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });


  module.exports = router;