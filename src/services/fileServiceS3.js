const storage = require("../config/s3");
const fs = require("fs");
const modifyName = require("../helpers/modifyName");

const bucketName = process.env.AWS_BUCKET;

const getAllFiles = () => {
  const files = storage
    .listObjects({
      Bucket: bucketName,
    })
    .promise();
  return files;
};
const getOneFile = (key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  return storage.getObject(params).promise();
};
const downloadOneFile = (key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  return storage.getObject(params).createReadStream();
};
const createNewFile = (file, fileName) => {
  const stream = fs.createReadStream(file.tempFilePath);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: stream,
  };
  return storage.upload(params).promise();
};
const updateOneFile = async (key, file) => {
  const stream = fs.createReadStream(file.file.tempFilePath);
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: stream,
  };
  return storage.putObject(params).promise();
};
const changeFileName = async (key, name) => {
  const fileName = modifyName(null, name);

  const params = {
    Bucket: bucketName,
    CopySource: `/${bucketName}/${key}`,
    Key: fileName,
  };
  await storage.copyObject(params).promise();

  return deleteOneFile(key);
};
const deleteOneFile = (key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  return storage.deleteObject(params).promise();
};

module.exports = {
  getAllFiles,
  getOneFile,
  downloadOneFile,
  createNewFile,
  updateOneFile,
  changeFileName,
  deleteOneFile,
};
