var express = require('express');
var bodyParser = require('body-parser');
var cors  = require('cors');

var database = require('./modules/database');
var usuarioRouter = require('./routes/usuarios-router');
var loginRouter = require('./routes/login-router');
var carpetaRouter = require('./routes/carpetas-router');
var proyectoRouter = require('./routes/proyectos-router');
var archivosRouter = require('./routes/archivos-router');
var planesRouter = require('./routes/planes-router');
var app = express();

port = 8888

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST','PUT','DELETE'], // Agrega otros métodos si son necesarios (por ejemplo, PUT, DELETE)
    optionsSuccessStatus: 200 // Algunos navegadores antiguos (como IE11) requieren un status 200 para respuestas preflight
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios',usuarioRouter)
app.use('/login',loginRouter)
app.use('/carpetas',carpetaRouter)
app.use('/proyectos',proyectoRouter)
app.use('/archivos',archivosRouter)
app.use('/planes',planesRouter)

app.get('/', function(req, res) {
    res.send('Servidor en Linea')
})

app.listen(port, function(){
    console.log('listening on port ' + port)
})