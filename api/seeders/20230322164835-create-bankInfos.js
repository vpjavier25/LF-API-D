'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let bankInfos = [{
      id: "e1d457f4-c8d1-11ed-afa1-0242ac120002",
      account: "banco xxxx"
    }]
    return queryInterface.bulkInsert("bankInfos", bankInfos, {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bankInfos", null, {});
  }
};
