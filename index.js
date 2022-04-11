/*jshint esversion:8*/
var express = require("express");
var app = express();

const pedidoRoute = require("./routes/pedidoRoute");
const boloRoute = require ("./routes/boloRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/pedido", pedidoRoute);
app.use("/bolo", boloRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
