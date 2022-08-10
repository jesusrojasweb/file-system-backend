const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDB;
