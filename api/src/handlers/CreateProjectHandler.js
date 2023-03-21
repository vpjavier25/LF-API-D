const { Project } = require("../db");

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
    const newProject = await Project.create({
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