const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.register);
router.post("/signin", authController.login);
router.post("/refresh", authController.refreshAuthenticate);


module.exports = router;