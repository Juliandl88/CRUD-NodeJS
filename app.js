const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.use("/", require("./router"));

app.listen(5000, () => {
    console.log("Server corriendo en http://localhost:5000");
});