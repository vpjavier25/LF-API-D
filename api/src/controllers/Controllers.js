const { where } = require("sequelize");
const { Projects } = require("../db");

const getAllProjects = async () => {
  const projects = await Projects.findAll();
  return projects;
};

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

const createProject = async (
  id_user,
  name,
  title,
  description,
  image,
  complete,
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
    complete,
    deleted,
    location,
    cost,
    currentAmount,
  });

  return {
    id: newProject.id,
    userId: id_user,
    name: name,
    title: title,
    description: description,
    image: image,
    complete: complete,
    deleted: deleted,
    location: location,
    cost: cost,
    currentAmount: currentAmount,
  };
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
};
