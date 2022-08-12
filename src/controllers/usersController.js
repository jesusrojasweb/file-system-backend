const usersService = require("../services/usersService");

const getAllUsers = (req, res, next) => {
  usersService
    .getAllUsers()
    .then((allUsers) => {
      res.status(200).json({ status: "OK", data: allUsers });
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { body } = req;
  const { userId } = body;

  usersService
    .createUser(body, userId)
    .then((user) => {
      res.status(201).json({ status: "OK", data: user });
    })
    .catch(next);
};

module.exports = { getAllUsers, createUser };
