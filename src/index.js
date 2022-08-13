const express = require("express");
const connectDB = require("./config/mongo");
const fileUpload = require("express-fileupload");
const v1Files = require("./v1/routes/filesRoutes");
const v1Users = require("./v1/routes/usersRoutes");
const v1Login = require("./v1/routes/loginRoutes");
const v1Images = require("./v1/routes/imagesRoutes");
const handleErrors = require("./middlewares/handleErrors");
const notFound = require("./middlewares/notFound");

const app = express();
const PORT = process.env.PORT || 3000;

require("./config/s3");
connectDB();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    debug: true,
  })
);

app.use(express.json());

app.use("/api/v1/files", v1Files);
app.use("/api/v1/users", v1Users);
app.use("/api/v1/auth", v1Login);
app.use("/api/v1/images", v1Images);

app.use(notFound);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
