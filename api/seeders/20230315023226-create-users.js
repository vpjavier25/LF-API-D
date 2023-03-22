'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [{
      
      email: "example1234@gmail.com",
      name: "Andres",
      lastname: "Torres",
      contraseña: "123456",
    },
   ]

    return queryInterface.bulkInsert('users', users, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})

  }
};
