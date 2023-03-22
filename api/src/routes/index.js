const { Router } = require('express');

const router = Router();
const {projectsIdController} = require("../controllers/GetProjectIdController");
const {allProjectsController} = require("../controllers/AllProjectsController");
const {createProjectController} = require("../controllers/CreateProjectController");
const {deleteProjectController} = require("../controllers/DeleteProjectController");
const {createUserController} = require("../controllers/CreateUserController");
const { CreateRoleController } = require('../controllers/CreateRoleController');
const { createAdminController } = require('../controllers/CreateAdminController');
const { createDonationController } = require('../controllers/createDonationController');
    

router.get('/projects', allProjectsController)

router.get('/projects/:id', projectsIdController)

router.put('/projects', deleteProjectController)

router.post('/projects', createProjectController)

router.post('/users', createUserController)

router.post('/roles', CreateRoleController)

router.post('/admins', createAdminController)

router.post('/donations', createDonationController)
module.exports = router;
