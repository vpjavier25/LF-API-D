'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let admins = [{
      email: "prueba@gmail.com",
      name: "Admin 1",
      lastname: "prueba",
      password: "123456"
    }]
    return queryInterface.bulkInsert("admins", admins, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("admins", null, {});

  }
};
