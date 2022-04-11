/*jshint esversion:8*/
var express = require("express");
var router = express.Router();
const boloController = require("../controller/boloController");


//listar todos os dados
router.get("/", boloController.list);
//listar dados com filtro
router.post("/", boloController.listfiltro);
//abre add
router.get("/add", boloController.abreadd);
//abrir editar
router.get("/edt/:id", boloController.abreedt);
//deletar dados
router.get("/del/:id", boloController.del);

router.post("/edt/:id", boloController.edt);

router.post("/add", boloController.add);

module.exports = router;