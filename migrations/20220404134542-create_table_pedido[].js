/*jshint esversion:8*/
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bolos", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      massa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recheioum: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recheiodois: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kilos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cobertura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bolos");
  },
};
