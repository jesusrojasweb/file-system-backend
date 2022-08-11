const { S3 } = require("aws-sdk");
require("dotenv").config({ path: ".env" });

const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const storage = new S3({
  accessKeyId,
  secretAccessKey,
});

module.exports = storage;
