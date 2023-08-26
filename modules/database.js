var mongoose = require('mongoose');
let bd = 'codeninja';
let port = '27017'
let host = 'localhost'

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://127.0.0.1:${port}/${bd}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result=>{
            console.log("Se conecto a MongoDB");
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new Database();