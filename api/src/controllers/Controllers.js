const { where } = require("sequelize")
const { Projects } = require('../db')



const getAllProjects = async () => {  
    const projects = await Projects.findAll()
    return projects
}

/* const filterId = async (id, source) => {

} 

const allDiets = async () => {

} */

const createProject = async (name, title, description, image, complete, deleted, location, cost, currentAmount) => {
    const newProject = await Projects.create({name, title, description, image, complete, deleted, location, cost, currentAmount})

        return {
            id: newProject.id,
            name: name,
            title: title,
            description: description,
            image: image,
            complete: complete,
            deleted: deleted,
            location: location,
            cost: cost,
            currentAmount: currentAmount
        }
}



module.exports = {
    /* allDiets,
    filterId, */
    createProject,
    getAllProjects,
}