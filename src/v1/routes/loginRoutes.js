const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/loginController");

router.post("/login", loginController.login);
router.post("/password-reset", loginController.resetPasswordEmail);
router.post("/password-reset/:userId/:token", loginController.resetPassword);

module.exports = router;
