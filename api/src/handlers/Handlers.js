const { createProject, getAllProjects } = require('../controllers/Controllers')

const projectsIdController = async (req, res) =>{
    res.status(200).json("proyectos por id")
}

const allProjectsController = async (req, res) =>{
    try {
        const allProjects = await getAllProjects()
        res.status(200).json(allProjects)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteProjectController = async (req, res) =>{
    res.status(200).json("se borro un proyecto")
}
   
const createProjectController = async (req, res) =>{
    const {id_user ,name, title, description, image, complete, deleted, location, cost, currentAmount} = req.body
    try {
       const postProject = await createProject(id_user ,name, title, description, image, complete, deleted, location, cost, currentAmount)
       res.status(200).json(postProject)
    } catch (error) {
        res.status(200).json({error: error.message})
    }
}


module.exports = {
    projectsIdController,
    allProjectsController,
    createProjectController,
    deleteProjectController
}