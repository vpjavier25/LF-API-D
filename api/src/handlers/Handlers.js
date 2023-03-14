const { allDiets, filterId, createFood, getAllName } = require('../controllers/Controllers')

const projectsIdController = async (req, res) =>{
    res.status(200).json("proyectos por id")
}

const allProjectsController = async (req, res) =>{
    res.status(200).json("todos los proyectos")
}

const deleteProjectController = async (req, res) =>{
    res.status(200).json("se borro un proyecto")
}
   
const createProjectController = async (req, res) =>{
    res.status(200).json("se creo un proyecto")
}


module.exports = {
    projectsIdController,
    allProjectsController,
    createProjectController,
    deleteProjectController
}