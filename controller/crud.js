const conexion = require("../dataBase/db");

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query("INSERT INTO users SET ?", {user:user , rol:rol}, (err, result) => {
        if(err) {
            throw err;
        }
        res.redirect("/");
    });
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query("UPDATE users SET ? WHERE id=?", [{user:user, rol:rol}, id], (err, result) => {
        if(err) {
            throw err;
        }
        res.redirect("/");
    });
}