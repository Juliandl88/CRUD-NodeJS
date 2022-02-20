const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.use("/", require("./router"));

app.listen(5000, () => {
    console.log("Server running in http://localhost:5000");
});