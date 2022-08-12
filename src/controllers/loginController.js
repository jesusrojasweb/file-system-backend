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

module.exports = { login };
