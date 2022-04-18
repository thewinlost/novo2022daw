/*jshint esversion:8*/
const { Op } = require("sequelize");
const Pedido = require("../models/Pedido");

async function abreadd(req, res) {
  res.render("pedido/add.ejs", {});
}

async function add(req, res) {
  const { nome, telefone, cpf, dataentrega, datapedido } = req.body;
  await Pedido.create({ nome, 
    telefone,
     cpf, 
     dataentrega, 
     datapedido }).then((pedido) => {   ///talvez tenha q mudar
    res.redirect("/pedido");
  });
}

async function abreedt(req, res) {
  let pedido = await Pedido.findByPk(req.params.id);
  res.render("pedido/edt.ejs", { pedido: pedido });
}

async function edt(req, res) {
  let pedido = await Pedido.findByPk(req.params.id);
  pedido.nome = req.body.nome;
  pedido.telefone = req.body.telefone;
  pedido.cpf = req.body.cpf;
  pedido.dataentrega = req.body.dataentrega;
  pedido.datapedido = req.body.datapedido;
  await pedido.save();
  res.redirect("/pedido");
}

async function list(req, res) {
  let pedidos = await Pedido.findAll();
  res.render("pedido/index.ejs", { Pedidos: pedidos });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let pedidos = await Pedido.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("pedido/index.ejs", { Pedidos: pedidos });
}

async function del(req, res) {
  let pedido = await Pedido.findByPk(req.params.id);
  await pedido.destroy();
  res.redirect("/pedido");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
