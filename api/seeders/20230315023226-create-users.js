'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [{
      id: "3fee4576-c8a9-11ed-afa1-0242ac120002",
      email: "example@gmail.com",
      name: "Andres",
      lastname: "Torres",
      password: "123456",
    },
   ]

    return queryInterface.bulkInsert('users', users, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})

  }
};
