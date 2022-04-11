/*jshint esversion:8*/
const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cpf: DataTypes.STRING,
        dataentrega: DataTypes.DATE,
        datapedido: DataTypes.DATE,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "pedidos" }
    );
  }
}

module.exports = Pedido;
