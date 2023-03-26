const { where } = require("sequelize");
const { Project} = require("../db");

const getProjectById = async (id) => {
    try {
      const projectById = await Project.findOne({
        where: {
          id: id,
        },
      });
      return projectById;
    } catch (error) {
      return {erro: error.message}
    }
  };

  module.exports = {getProjectById}