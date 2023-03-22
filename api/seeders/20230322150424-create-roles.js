"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let roles = [
      {
        id: "3fee4576-c8a9-11ed-afa1-0242ac120002",
        name: "Admin",
      },
    ];
    return queryInterface.bulkInsert("roles", roles, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("roles", null, {});
  },
};
