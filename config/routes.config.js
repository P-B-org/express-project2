const router = require('express').Router();

const miscController = require ("../controllers/misc.controller");
const authController = require ("../controllers/auth.controller");
const userController = require ("../controllers/user.controller");


/* Main route*/ 
router.get("/", miscController.index);

/*Auth */
router.get("/signup", authController.signup);
router.post("/signup", authController.doSignup);

router.get("/login", authController.login);
router.post('/login', authController.doLogin);

router.get("/logout" , authController.doLogout);

router.get("/profile", userController.profile);

module.exports = router;