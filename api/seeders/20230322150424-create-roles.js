"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let roles = [
      {
        name: "Admin",
      },
    ];
    return queryInterface.bulkInsert("roles", roles, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("roles", null, {});
  },
};
