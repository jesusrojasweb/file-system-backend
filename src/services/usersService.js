const bcrypt = require("bcrypt");
const User = require("../database/User");

const saltRounds = 10;

const getAllUsers = (userId) => {
  const allUsers = User.find({ id: userId });
  return allUsers;
};

const getUser = (email, userId) => {
  let data = {};
  if (email) {
    data = {
      email,
    };
  }
  if (userId) {
    data = {
      ...data,
      id: userId,
    };
  }
  const user = User.findOne(data);
  return user;
};

const createUser = async (data) => {
  const { name, email, password } = data;

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    passwordHash,
  });

  return user.save();
};

const changePassowrd = async (id, password) => {
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = User.findOneAndUpdate(
    {
      _id: id,
    },
    { passwordHash }
  );
  return user;
};

module.exports = { getAllUsers, getUser, createUser, changePassowrd };
