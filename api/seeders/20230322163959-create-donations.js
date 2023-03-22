'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let donations = [{
      id: "879d82c4-c8d1-11ed-afa1-0242ac120002",
      monto: "20$"
    }]
    return queryInterface.bulkInsert("donations", donations, {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("donations", null, {});
  }
};
