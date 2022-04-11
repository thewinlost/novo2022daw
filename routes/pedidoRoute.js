/*jshint esversion:8*/
var express = require("express");
var router = express.Router();
const pedidoController = require("../controller/pedidoController");


//listar todos os dados
router.get("/", pedidoController.list);
//listar dados com filtro
router.post("/", pedidoController.listfiltro);
//abre add
router.get("/add", pedidoController.abreadd);
//abrir editar
router.get("/edt/:id", pedidoController.abreedt);
//deletar dados
router.get("/del/:id", pedidoController.del);

router.post("/edt/:id", pedidoController.edt);

router.post("/add", pedidoController.add);


module.exports = router;
