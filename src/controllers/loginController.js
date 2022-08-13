const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginService = require("../services/loginService");

const login = (req, res, next) => {
  const { body } = req;
  const { email, password } = body;

  loginService
    .login({ email, password })
    .then((user) => {
      res.json({ status: "OK", user });
    })
    .catch(next);
};

const resetPasswordEmail = (req, res, next) => {
  const { email } = req.body;
  loginService
    .resetPasswordEmail(email)
    .then(() => {
      res.json({ msg: "password reset link sent to your email account" });
    })
    .catch(next);
};
const resetPassword = (req, res, next) => {
  const { userId, token } = req.params;
  const { password } = req.body;
  loginService
    .resetPassword(userId, token, password)
    .then(() => {
      res.json({ msg: "password reset sucessfully." });
    })
    .catch(next);
};

module.exports = { login, resetPasswordEmail, resetPassword };
