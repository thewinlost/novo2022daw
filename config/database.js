/*jshint esversion:8*/
const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Pedido = require("../models/Pedido");

Pedido.init(conexao);

const Bolo = require("../models/Bolo");

Bolo.init(conexao);

module.exports = conexao;
