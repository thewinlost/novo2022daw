/*jshint esversion:8*/
const { Op } = require("sequelize");
const Bolo = require("../models/Bolo");

async function abreadd(req, res) {
  res.render("bolo/add.ejs", {});
}

async function add(req, res) {
  const { massa, recheioum, recheiodois, kilos, cobertura } = req.body;
  await Bolo.create({ massa, 
    recheioum,
     recheiodois, 
     kilos, 
     cobertura }).then((bolo) => {   ///talvez tenha q mudar
    res.redirect("/bolo");
  });
}

async function abreedt(req, res) {
  let bolo = await Bolo.findByPk(req.params.id);
  res.render("bolo/edt.ejs", { bolo: bolo });
}

async function edt(req, res) {
  let bolo = await Bolo.findByPk(req.params.id);
  bolo.massa = req.body.massa;
  bolo.recheioum = req.body.recheioum;
  bolo.recheiodois = req.body.recheiodois;
  bolo.kilos = req.body.kilos;
  bolo.cobertura = req.body.cobertura;
  await bolo.save();
  res.redirect("/bolo");
}

async function list(req, res) {
  let bolos = await Bolo.findAll();
  res.render("bolo/index.ejs", { Bolos: bolos });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let bolos = await Bolo.findAll({
    where: { massa: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("bolo/index.ejs", { Bolos: bolos });
}

async function del(req, res) {
  let bolo = await Bolo.findByPk(req.params.id);
  await bolo.destroy();
  res.redirect("/bolo");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
