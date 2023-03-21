const { createProject } = require("../handlers/CreateProjectHandler");

const createProjectController = async (req, res) => {
    const { id_user, name, title, description, image, completed, deleted, location, cost, currentAmount } = req.body
    try {
        const postProject = await createProject(id_user, name, title, description, image, completed, deleted, location, cost, currentAmount)
        res.status(200).json(postProject)
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

module.exports = {createProjectController};