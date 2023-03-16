"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let projects = [
      {
        id: "d40e525e-c2dd-11ed-afa1-0242ac120002",
        name: "Miguel",
        title: "Ayuda para el pueblo",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      }
    ];

    return queryInterface.bulkInsert("projects", projects, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("projects", null, {});
  },
};
