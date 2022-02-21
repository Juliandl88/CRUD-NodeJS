const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((err) => {
    if(err){
        console.log("El error de conexión es: " + err);
        return 
    }
    console.log("Conectado a la base de datos")
});

module.exports = conexion;