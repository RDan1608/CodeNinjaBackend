var express = require('express');
var router = express.Router();
var planes = require('../models/planes');




//ver Carpeta en Especifico
router.get('/:id', function(req, res) {

    planes.find({_id: req.params.id})
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
      planes.find().then(result=>{
        res.send(result);
        res.end();
      }).catch(err=>{
        res.send(err);
        res.end();
      });
      
})


  module.exports = router;