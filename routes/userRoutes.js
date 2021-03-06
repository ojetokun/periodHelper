
const express = require('express'),
  userController = require('../controllers/userController'),
  router = express.Router(),
  { ensureLoggedIn } = require('connect-ensure-login');

router.post('/login/authenticate', userController.authenticate, userController.redirectView);
router.post('/create', userController.validate(),userController.checkValidate, userController.create, userController.redirectView);
router.post('/new-password', userController.newPasswordSubmit, userController.redirectView);

router.get('/sign-up', userController.signUp);
router.get('/login', userController.login);
router.get('/logout', userController.logout, userController.redirectView);
router.get('/reset/check', userController.checkReset);
router.get('/reset-password', userController.resetPage);
router.get('/new-password', userController.newPasswordPage);




router.use(ensureLoggedIn("/users/login"))

router.post('/update', userController.update, userController.redirectView);
router.get('/edit', userController.editPage);
router.get('/', userController.home);



module.exports = router;
