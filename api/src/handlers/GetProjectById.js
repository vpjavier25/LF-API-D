const { where } = require("sequelize");
const { Projects} = require("../db");

const getProjectById = async (id) => {
    try {
      const projectById = await Projects.findOne({
        where: {
          id: id,
        },
      });
      return projectById;
    } catch (error) {
      throw error;
    }
  };

  module.exports = {getProjectById}