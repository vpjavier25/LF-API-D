const { Projects } = require("../db");

const createProject = async (
    id_user,
    name,
    title,
    description,
    image,
    completed,
    deleted,
    location,
    cost,
    currentAmount
  ) => {
    const newProject = await Projects.create({
      id_user,
      name,
      title,
      description,
      image,
      completed,
      deleted,
      location,
      cost,
      currentAmount,
    });
  
    
  
    return newProject;
  };

  module.exports = {createProject}