/*jshint esversion:8*/
const { Model, DataTypes } = require("sequelize");

class Bolo extends Model {
  static init(conexao) {
    super.init(
      {
        massa: DataTypes.STRING,
        recheioum: DataTypes.STRING,
        recheiodois: DataTypes.STRING,
        kilos: DataTypes.STRING,
        cobertura: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "bolos" }
    );
  }
}

module.exports = Bolo;
