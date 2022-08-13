const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const usersService = require("../services/usersService");
const ResetToken = require("../database/ResetToken");
const sendEmail = require("../utils/sendEmail");
require("dotenv").config({ path: ".env" });

const login = (loginData) => {
  const logged = new Promise(async (resolve, reject) => {
    const { email, password } = loginData;

    const user = await usersService.getUser(email);

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      const error = new Error("invalid user or password");
      reject(error);
    }

    const userForToken = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });
    resolve({
      name: user.name,
      email: user.email,
      token,
    });
  });
  return logged;
};

const resetPasswordEmail = (email) => {
  const resetEmail = new Promise(async (resolve, reject) => {
    const user = await usersService.getUser(email);

    if (!user) {
      const error = new Error("user with given email doesn't exist");
      reject(error);
    }

    let resetToken = await ResetToken.findOne({ userId: user.id });
    if (!resetToken) {
      resetToken = await new ResetToken({
        userId: user.id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.BASE_URL}:${process.env.PORT}/api/v1/auth/password-reset/${user.id}/${resetToken.token}`;
    const emailMessage = sendEmail(user.email, "Password reset", link);
    resolve(emailMessage);
  });
  return resetEmail;
};
const resetPassword = async (userId, token, password) => {
  const resetPasswordPromise = new Promise(async (resolve, reject) => {
    const user = await usersService.getUser(null, userId);
    if (!user) {
      const error = new Error("invalid link or expired");
      return reject(error);
    }
    const resetToken = await ResetToken.findOne({
      userId,
      token,
    });
    if (!resetToken) {
      const error = new Error("Invalid link or expired");
      return reject(error);
    }
    const userChanged = await usersService.changePassowrd(userId, password);
    await resetToken.delete();
    resolve(userChanged);
  });
  return resetPasswordPromise;
};

module.exports = { login, resetPasswordEmail, resetPassword };
