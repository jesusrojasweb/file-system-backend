const User = require("../database/User");
const usersService = require("../services/usersService");

describe("creating a new user", () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const data = {
      name: "Nombre",
      email: "email@test.com",
      password: "psw",
    };
    await usersService.createUser(data);
  });

  test("works as expected creating a fresh email", async () => {
    const usersDB = await User.find({});
    const usersAtStart = usersDB.map((user = user.toJSON()));

    const newUser = {
      name: "Nombre",
      email: "otro@test.com",
      password: "passw",
    };
  });
});
