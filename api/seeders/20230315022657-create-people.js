'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const people = [{
      id: "b3140412-c6d9-89ed-afa1-0242ac120122",
      name: "Juan",
      lastname: "Perez",
      bankinfo: "1324657987",
      description: "hola",
      address: "Colombia",
      phonenumber: "798465",
      city: "Medallo"
    },
    {
      id: "b3140412-c3d9-22ed-afa1-0242ac120032",
      name: "Pedro",
      lastname: "Camejo",
      bankinfo: "1324657987",
      description: "hola",
      address: "Colombia",
      phonenumber: "798465",
      city: "Medallo"
    },
    {
      id: "b3140412-c7d9-11ed-afa1-0242ac121052",
      name: "Pepe",
      lastname: "Blanco",
      bankinfo: "1324657987",
      description: "hola",
      address: "Colombia",
      phonenumber: "798465",
      city: "Bogotá"
    }]

    return queryInterface.bulkInsert('people', people, {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('people', null, {})

  }
};
