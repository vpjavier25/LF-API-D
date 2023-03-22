"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let projects = [
      {
        id: "d40e525e-c2dd-11ed-afa1-0242ac120002",
        name: "Ayuda para el pueblo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget urna maximus.",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfad55e-c413-11ed-afa1-0242ac120002",
        name: "Todos Unidos Por Totoró",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Chile",
      },{
        id: "2dfad716-c413-11ed-afa1-0242ac120002",
        name: "Sembrando Conciencia",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfad8ce-c413-11ed-afa1-0242ac120002",
        name: "Una Mano Amiga para Neiva",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfada5e-c413-11ed-afa1-0242ac120002",
        name: "Creando Sonrisas",
        description: "Descripcion 2",
        image: "https://www.noticiasensalud.com/wp-content/uploads/2021/07/Servicios-centros-e-informaciones-de-interes-para-garantizar-nuestra-salud-1000x600.png",
        completed: false,
        deleted: false,
        location: "Brazil",
      },{
        id: "2dfaddf6-c413-11ed-afa1-0242ac120002",
        name: "Necesitamos tu Ayuda",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfadf9a-c413-11ed-afa1-0242ac120002",
        name: "Alcanzando Nuestro Sueños",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Argentina",
      },{
        id: "2dfae134-c413-11ed-afa1-0242ac120002",
        name: "Deporte para Buga",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfae2ba-c413-11ed-afa1-0242ac120002",
        name: "Ayuda a la Escuela de Música de Valledupar",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Chile",
      },{
        id: "2dfae45e-c413-11ed-afa1-0242ac120002",
        name: "Ayuda a La Ciudad Escondida",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfae5f8-c413-11ed-afa1-0242ac120002",
        name: "Sembrando Sonrisas en Calí",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfae8fa-c413-11ed-afa1-0242ac120002",
        name: "Un Techo Amigo",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfaea9e-c413-11ed-afa1-0242ac120002",
        name: "Todos por la Educación",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfaec1a-c413-11ed-afa1-0242ac120002",
        name: "Llegar más Lejos",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      },{
        id: "d5c023f6-c414-11ed-afa1-0242ac120002",
        name: "Ayudanos a la Recoleción de Agua de Lluvia",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Peru",
      },{
        id: "2dfaed78-c413-11ed-afa1-0242ac120002",
        name: "Implementar Paneles Solares en las Costas",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Peru",
      },{
        id: "2dfaefd0-c413-11ed-afa1-0242ac120002",
        name: "Todos por el Agua Potable",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: false,
        deleted: false,
        location: "Colombia",
      },{
        id: "2dfaf106-c413-11ed-afa1-0242ac120002",
        name: "Escuela de Música en Ibagué",
        description: "Descripcion 2",
        image: "https://pbs.twimg.com/profile_images/780533176691257345/_hjWP8SR_400x400.jpg",
        completed: true,
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
