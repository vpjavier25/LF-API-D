const { Router } = require('express');
const passport = require('passport');

const router = Router();
const { projectsIdController } = require("../controllers/GetProjectIdController");
const { allProjectsController } = require("../controllers/AllProjectsController");
const { createProjectController } = require("../controllers/CreateProjectController");
const { deleteProjectController } = require("../controllers/DeleteProjectController");
const { createUserController } = require("../controllers/CreateUserController");
const { CreateRoleController } = require('../controllers/CreateRoleController');
const { createAdminController } = require('../controllers/CreateAdminController');
const { createDonationController } = require('../controllers/createDonationController');
const { createPayment, executePayment, cancelPayment } = require('../controllers/CreatePaymentController');
const { logInController } = require("../controllers/LogInController");

router.get('/projects', allProjectsController)

router.get('/projects/:id', projectsIdController)

router.put('/projects', deleteProjectController)

router.post('/projects', createProjectController)

router.post('/users', createUserController)

router.post('/roles', CreateRoleController)

router.post('/admins', createAdminController)

router.post('/donations', createDonationController)

router.post('/create-payment', createPayment)

router.get('/execute-payment', executePayment)

router.get('/cancel-payment', cancelPayment)

router.post('/login', logInController)

router.get('/auth/google/signup/callback"')

router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile'], session: false }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' , session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.profile)
    res.redirect('http://localhost:3000/home');
  });

module.exports = router;
