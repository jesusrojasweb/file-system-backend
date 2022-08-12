const File = require("../database/File");

const getAllFiles = () => {
  const files = File.find({});
  return files;
};
const getOneFile = (key, userId) => {
  const file = File.findOne({ key, user: userId });
  return file;
};
const createNewFile = (file, identifyInfo) => {
  const fileData = {
    name: identifyInfo.name,
    type: file.mimetype,
    key: identifyInfo.name,
    user: identifyInfo.userId,
  };

  const newFile = new File(fileData);
  return newFile.save();
};
const updateOneFile = (key, data) => {
  const { name, userId } = data;
  const fileUpdated = File.findOneAndUpdate(
    { key, user: userId },
    { name },
    { new: true }
  );
  return fileUpdated;
};
const deleteOneFile = (key, user) => {
  const fileDeleted = File.findOneAndRemove({ key, user });
  return fileDeleted;
};

module.exports = {
  getAllFiles,
  getOneFile,
  createNewFile,
  updateOneFile,
  deleteOneFile,
};
