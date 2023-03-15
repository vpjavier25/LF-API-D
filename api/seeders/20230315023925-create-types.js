'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const types = [{
      id: "955438dc-c2db-88ed-afa1-0242ac120002",
      typename: "Donador"
    },
    {
      id: "865438dc-c2db-99ed-afa1-0242ac120002",
      typename: "Comunidad"
    }]

    return queryInterface.bulkInsert('types', types, {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('types', null, {})

  }
};
