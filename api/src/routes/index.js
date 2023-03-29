const { Router } = require('express');
const passport = require('passport');


const router = Router();
const {allProjectsController} = require("../controllers/AllProjectsController");
const {createProjectController} = require("../controllers/CreateProjectController");
const {deleteProjectController} = require("../controllers/DeleteProjectController");
const {createUserController} = require("../controllers/CreateUserController");
const { createAdminController } = require('../controllers/CreateAdminController');
const { createDonationController } = require('../controllers/createDonationController');
const { createComunidadController } = require('../controllers/CreateComunidadController');
const { createBankInfoController } = require('../controllers/CreateBankInfoController');
const { allAdminsController } = require('../controllers/AllAdminController');
const { allBankInfoController } = require('../controllers/AllbankInfosController');
const { allComunidadesController } = require('../controllers/AllComunidadesController');
const { allDonationsController } = require('../controllers/AllDonationsController');
const { allUsersController } = require('../controllers/AllUsersController');
const { createPayment, executePayment, cancelPayment } = require('../controllers/CreatePaymentController')
const { logInController } = require('../controllers/LogInController')
const { GoogleCallBackController } = require('../controllers/GoogleCallBackController')
    
//----------------------------------------------------
router.post('/users', createUserController)
router.get('/users', allUsersController)
router.get('/admins', allAdminsController)
router.get('/bankInfos', allBankInfoController)
router.get('/comunidads', allComunidadesController)
//----------------------------------------------------
router.put('/projects', deleteProjectController)
router.post('/projects', passport.authenticate('jwt', { session: false }), createProjectController)
//----------------------------------------------------
router.post('/admins', createAdminController)
router.post('/donations', createDonationController) 
router.post('/comunidads', createComunidadController)   
router.post('/bankInfos', createBankInfoController)
//----------------------------------------------------
router.get('/donations', allDonationsController)
router.get('/projects', allProjectsController)
//----------------------------------------------------
router.post('/donations', passport.authenticate('jwt', { failureRedirect: 'https://client-pf-seven.vercel.app/login', session: false }), createDonationController)
router.post('/create-payment', createPayment)
router.get('/execute-payment', executePayment)
router.get('/cancel-payment', cancelPayment)
//------------------------------------------------------------------------
router.post('/login', logInController);
router.get('/login', (req, res) => {
  res.cookie("value", req.app.locals.token, { httpOnly: false, maxAge: 1000 * 60 * 10, });
  res.cookie("success", "true", { httpOnly: false, maxAge: 1000 * 60 * 30, });
  console.log(res.cookie);
  res.redirect("https://client-pf-seven.vercel.app/home");
})//con esta ruta logro que las cookies lleguen al puerto 3000 luego de la verificacion con la ruta post

//--------------------------------------------------------------------------

//-----------------------------------------------------------------------------

router.get("/logout", (req, res) =>{
  res.clearCookie("value");
  res.clearCookie("success");
  res.redirect("https://client-pf-seven.vercel.app/login");
})//ruta para limpiar las cookies
//------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------
//google auth
router.get('/auth/google', async (req, res) => {
  const url = 'https://accounts.google.com/o/oauth2/v2/auth';
  const params = {
    response_type: 'code',
    redirect_uri: 'https://pf-api-production.up.railway.app/auth/google/callback',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    client_id: '959933967168-h1t0cc60opb0jajdd4chftin4qq3mplq.apps.googleusercontent.com'
  };
  const response = await fetch(`${url}?${new URLSearchParams(params)}`);
  const text = await response.text();
  console.log(text);
  res.send(text);
});
// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'], session: false }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: 'https://client-pf-seven.vercel.app/login', session: false }),
//   GoogleCallBackController
// );

//--------------------------------------------------------------------------------------------------------------


module.exports = router;
