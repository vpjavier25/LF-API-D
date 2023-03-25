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
const { GoogleCallBackController } = require("../controllers/GoogleCallBackController");

router.get('/projects', allProjectsController)

router.get('/projects/:id', projectsIdController)

router.put('/projects', deleteProjectController)

router.post('/projects', passport.authenticate('jwt', { failureRedirect: 'http://localhost:3000/login' , session:false}), createProjectController)

router.post('/user', createUserController)

router.post('/roles', CreateRoleController)

router.post('/admins', createAdminController)

router.post('/donations', passport.authenticate('jwt', { failureRedirect: 'http://localhost:3000/login' , session:false}), createDonationController)

router.post('/create-payment', createPayment)

router.get('/execute-payment', executePayment)

router.get('/cancel-payment', cancelPayment)

router.get('/login', logInController)

// router.use((req, res) =>{
//   res.cookie("value", res.tokenName, { httpOnly: false, maxAge: 500000000 });
//   res.cookie("success", "true", { httpOnly: false, maxAge: 500000000 });
//   res.redirect('/');
// })


router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile'], session: false }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/home' , session:false}),
  GoogleCallBackController
);



module.exports = router;
