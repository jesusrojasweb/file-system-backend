const express = require("express");
const connectDB = require("./config/mongo");
const v1Files = require("./v1/routes/filesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/api/v1/files", v1Files);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
