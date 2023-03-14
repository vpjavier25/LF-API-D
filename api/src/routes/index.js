const { Router } = require('express');

const router = Router();
const {
    projectsIdController,
    allProjectsController,
    createProjectController,
    deleteProjectController
} = require("../handlers/Handlers")

router.get('/projects', allProjectsController)

router.get('/projects/:id', projectsIdController)

router.put('/projects', deleteProjectController)

router.post('/projects', createProjectController)

module.exports = router;
