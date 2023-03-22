const { Project } = require("../db");

const createProject = async (
  userid,
  adminid,
  name,
  description,
  image,
  location,
  cost,
  currentAmount,
  status,
  completed,
  deleted
  ) => {
    const newProject = await Project.create({
            name,
            description,
            image,
            location,
            cost,
            currentAmount,
            status,
            completed,
            deleted
    });

    newProject.setUser(userid)
    newProject.setAdmin(adminid)
  
    
  
    return newProject;
  };

  module.exports = {createProject}