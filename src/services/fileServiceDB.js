const File = require("../database/File");

const getAllFiles = () => {
  const files = File.find({});
  return files;
};
const getOneFile = (key) => {
  const file = File.findOne({ key });
  return file;
};
const createNewFile = (file) => {
  const fileData = {
    ...file,
    key: file.name,
  };

  const newFile = new File(fileData);
  return newFile.save();
};
const updateOneFile = (key, data) => {
  const fileUpdated = File.findOneAndUpdate({ key }, data, { new: true });
  return fileUpdated;
};
const deleteOneFile = (key) => {
  console.log(key);
  const fileDeleted = File.findOneAndRemove({ key });
  return fileDeleted;
};

module.exports = {
  getAllFiles,
  getOneFile,
  createNewFile,
  updateOneFile,
  deleteOneFile,
};
