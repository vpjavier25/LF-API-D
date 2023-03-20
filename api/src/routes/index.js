const { Router } = require('express');

const router = Router();
const {
    projectsIdController,
    allProjectsController,
    createProjectController,
    deleteProjectController,
    createPersonController,
    createUserController
} = require("../handlers/Handlers")

router.get('/projects', allProjectsController)

router.get('/projects/:id', projectsIdController)

router.put('/projects', deleteProjectController)

router.post('/projects', createProjectController)

router.post('/people', createPersonController)

router.post('/users', createUserController)


module.exports = router;
