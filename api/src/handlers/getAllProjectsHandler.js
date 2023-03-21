const { where, Op } = require("sequelize");
const { Projects} = require("../db");

const getAllProjects = async (completed, location,name) => {
    if (completed === "false") {
      const filter1 = await Projects.findAll({
        where: { completed: completed },
      });
      if (location !== undefined) {
        let filter2 = filter1.filter(
          (el) => el.location.toLowerCase() === location.toLowerCase()
        );
        return filter2;
      }
      return filter1;
    }
    if (completed === "true") {
      const filter3 = await Projects.findAll({
        where: { completed: completed },
      });
      if (location !== undefined) {
        let filter4 = filter3.filter(
          (el) => el.location.toLowerCase() === location.toLowerCase()
        );
        return filter4;
      }
      return filter3;
    }
    if (completed === undefined && location) {
      const filter5 = await Projects.findAll({
        where: { location: { [Op.iLike]: `${location}` } },
      });
      return filter5;
    } if(name) {
      const searchByName = await Projects.findAll({
        where: { title: { [Op.iLike]: `%${name}%`}}
      });
      return searchByName;
    }else {
      const projects = await Projects.findAll();
      return projects;
    }
  };

  module.exports ={ getAllProjects};