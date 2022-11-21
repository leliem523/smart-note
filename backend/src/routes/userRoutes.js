const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

const router = require("express").Router();

router.post(
  "/user",
  authMiddleware.accessTokenAuthenticated,
  userController.getAllUser
);

module.exports = router;
