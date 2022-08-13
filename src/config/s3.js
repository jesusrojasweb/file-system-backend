const aws = require("aws-sdk");
require("dotenv").config({ path: ".env" });

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const storage = new aws.S3({
  accessKeyId,
  secretAccessKey,
});

const ses = new aws.SES({
  apiVersion: "2010-12-01",
});

module.exports = { storage, ses, aws };
