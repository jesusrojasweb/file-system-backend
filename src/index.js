const express = require("express");
const connectDB = require("./config/mongo");
const fileUpload = require("express-fileupload");
const v1Files = require("./v1/routes/filesRoutes");
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

app.use(notFound);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
