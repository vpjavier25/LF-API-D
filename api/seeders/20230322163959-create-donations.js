'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let donations = [{
     
      monto: "20$"
    }]
    return queryInterface.bulkInsert("donations", donations, {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("donations", null, {});
  }
};
