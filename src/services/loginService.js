const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usersService = require("../services/usersService");
require("dotenv").config({ path: ".env" });

const login = async (loginData) => {
  const { email, password } = loginData;

  const user = await usersService.getUser(email);

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    res.status(401).json({ error: "invalid usero password" });
  }

  const userForToken = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  return {
    name: user.name,
    email: user.email,
    token,
  };
};

module.exports = { login };
