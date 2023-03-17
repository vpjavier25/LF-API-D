const { where, Op } = require("sequelize");
const { Projects, User, Type, Person } = require("../db");

const getAllProjects = async (completed, location) => {
  if(completed === "false"){
    console.log("pasa por el if")
    const filter1 = await Projects.findAll({where: {completed: completed}})
    if(location !== undefined){
      let filter2 = filter1.filter(el => el.location.toLowerCase() === location.toLowerCase())
      return filter2
    }
    return filter1
  } 
  if(completed === "true"){
    console.log("pasa por el if")
    const filter3 = await Projects.findAll({where: {completed: completed}})
    if(location !== undefined){
      let filter4 = filter3.filter(el => el.location.toLowerCase() === location.toLowerCase())
      return filter4
    }
    return filter3
  } 
  if(completed === undefined && location){
    const filter5 = await Projects.findAll({
      where: { location: { [Op.iLike]: `${location}` } }
    });
    return filter5;
  }else{
    const projects = await Projects.findAll();
    return projects;
  }
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
  id_user ,
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
  id_user ,
  name, 
  title, 
  description, 
  image, 
  completed, 
  deleted, 
  location, 
  cost, 
  currentAmount
  });
  return newProject
}

const createPerson = async (name, lastname, bankinfo, description, address, phonenumber, city) => {
  const newPerson = await Person.create({name, lastname, bankinfo, description, address, phonenumber, city})

      return {
          id: newPerson.id,
          name: name,
          lastname: lastname,
          bankinfo: bankinfo,
          description: description,
          address: address,
          phonenumber: phonenumber,
          city: city,
      }
    }

module.exports = {
  createProject,
  getAllProjects,
  createPerson,
  getProjectById,
};
