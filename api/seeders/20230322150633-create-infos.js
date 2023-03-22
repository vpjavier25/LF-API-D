'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let infos = [{
      name: "comunidad cualquiera",
      description: "",
      location: "donde queda la comunidad"
    }]
    return queryInterface.bulkInsert("infos", infos, {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("infos", null, {});
  }
};
