'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [{
      id: "d1ad85de-c2d1-11ed-bfb1-0242ac132862",
      email: "example@gmail.com",
      password: "123456",
    },
   ]

    return queryInterface.bulkInsert('users', users, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})

  }
};
