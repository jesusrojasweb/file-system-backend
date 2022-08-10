const fileService = require("../services/fileService");

const getAllFiles = (req, res) => {
  const allFiles = fileService.getAllFiles();
  res.send(`Get all files`);
};
const getOneFile = (req, res) => {
  const file = fileService.getOneFile(req.params.fileId);
  res.send(`Get file ${req.params.fileId}`);
};
const createNewFile = (req, res) => {
  const createFile = fileService.createNewFile(req.params.fileId);
  res.send(`Get file ${req.params.fileId}`);
};
const updateOneFile = (req, res) => {
  const updatefile = fileService.updateOneFile(req.params.fileId);
  res.send(`Update file ${req.params.fileId}`);
};
const deleteOneFile = (req, res) => {
  fileService.deleteOneFile(req.params.fileId);
  res.send(`Delete file ${req.params.fileId}`);
};

module.exports = {
  getAllFiles,
  getOneFile,
  createNewFile,
  updateOneFile,
  deleteOneFile,
};
