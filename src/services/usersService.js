const bcrypt = require("bcrypt");
const User = require("../database/User");

const getAllUsers = (userId) => {
  const allUsers = User.find({ id: userId });
  return allUsers;
};

const getUser = (email = "", userId = "") => {
  const user = User.findOne({ email, id: userId });
  return user;
};

const createUser = async (data) => {
  const { name, email, password } = data;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    passwordHash,
  });

  return user.save();
};

module.exports = { getAllUsers, getUser, createUser };
